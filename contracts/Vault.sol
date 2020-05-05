pragma solidity 0.6.5;

import "./lib/math/SafeMath.sol";

interface ERC20 {
    function balanceOf(address account) external view returns (uint256);
}

contract Vault {
    using SafeMath for uint256;

    address private constant ETHER_ADDR = address(0x8000003c);
    mapping(address => bool) public withdrawers;
    mapping(bytes32 => bool) public usedHashes;

    event Deposit(
        address user,
        address assetId,
        uint256 amount,
        string externalAddress,
        string sender
    );

    constructor() public {
        withdrawers[msg.sender] = true;
    }

    function deposit(
        address _user,
        string calldata _externalAddress,
        string calldata _senderAddress
    )
        external
        payable
    {
        emit Deposit(
            _user,
            ETHER_ADDR,
            msg.value,
            _externalAddress,
            _senderAddress
        );
    }

    function depositToken(
        address _user,
        address _assetId,
        uint256 _amount,
        string calldata _externalAddress,
        string calldata _senderAddress
    )
        external
    {
        uint256 receivedAmount = _transferTokensIn(
            msg.sender,
            _assetId,
            _amount
        );

        emit Deposit(
            _user,
            _assetId,
            receivedAmount,
            _externalAddress,
            _senderAddress
        );
    }

    function addWithdrawer(address _withdrawer, uint256 _nonce) external {
        require(
            withdrawers[msg.sender] == true,
            "Unauthorised sender"
        );

        require(
            withdrawers[_withdrawer] == false,
            "Withdrawer already added"
        );

        bytes32 message = keccak256(abi.encodePacked(
            "addWithdrawer",
            address(this),
            _withdrawer,
            _nonce
        ));
        require(
            usedHashes[message] == false,
            "Nonce already used"
        );

        withdrawers[_withdrawer] = true;
        usedHashes[message] = true;
    }

    function removeWithdrawer() external {
        require(withdrawers[msg.sender] == true, "Withdrawer already removed");
        withdrawers[msg.sender] = false;
    }

    function withdraw(
        address payable _receivingAddress,
        address _assetId,
        uint256 _amount
    )
        external
    {
        _withdraw(
            _receivingAddress,
            _assetId,
            _amount
        );
    }

    function _withdraw(
        address payable _receivingAddress,
        address _assetId,
        uint256 _amount
    )
        private
    {
        if (_assetId == ETHER_ADDR) {
            _receivingAddress.transfer(_amount);
            return;
        }

        _transferTokensOut(
            _receivingAddress,
            _assetId,
            _amount
        );
    }

    /// @notice Transfers tokens into the contract
    /// @param _user The address to transfer the tokens from
    /// @param _assetId The address of the token to transfer
    /// @param _amount The number of tokens to transfer
    /// this may not match `_amount`, for example, tokens which have a
    /// proportion burnt on transfer will have a different amount received.
    function _transferTokensIn(
        address _user,
        address _assetId,
        uint256 _amount
    )
        private
        returns (uint256)
    {
        _validateContractAddress(_assetId);

        uint256 initialBalance = _tokenBalance(_assetId);

        // Some tokens have a `transferFrom` which returns a boolean and some do not.
        // The ERC20 interface cannot be used here because it requires specifying
        // an explicit return value, and an EVM exception would be raised when calling
        // a token with the mismatched return value.
        bytes memory payload = abi.encodeWithSignature(
            "transferFrom(address,address,uint256)",
            _user,
            address(this),
            _amount
        );
        bytes memory returnData = _callContract(_assetId, payload);
        // Ensure that the asset transfer succeeded
        _validateContractCallResult(returnData);

        uint256 finalBalance = _tokenBalance(_assetId);
        uint256 transferredAmount = finalBalance.sub(initialBalance);

        return transferredAmount;
    }

    /// @notice Transfers tokens from the contract to a user
    /// @param _receivingAddress The address to transfer the tokens to
    /// @param _assetId The address of the token to transfer
    /// @param _amount The number of tokens to transfer
    function _transferTokensOut(
        address _receivingAddress,
        address _assetId,
        uint256 _amount
    )
        private
    {
        _validateContractAddress(_assetId);

        // Some tokens have a `transfer` which returns a boolean and some do not.
        // The ERC20 interface cannot be used here because it requires specifying
        // an explicit return value, and an EVM exception would be raised when calling
        // a token with the mismatched return value.
        bytes memory payload = abi.encodeWithSignature(
                                   "transfer(address,uint256)",
                                   _receivingAddress,
                                   _amount
                               );
        bytes memory returnData = _callContract(_assetId, payload);

        // Ensure that the asset transfer succeeded
        _validateContractCallResult(returnData);
    }

    /// @notice Returns the number of tokens owned by this contract.
    /// @dev This will not work for Ether tokens, use `externalBalance` for
    /// Ether tokens.
    /// @param _assetId The address of the token to query
    function _tokenBalance(address _assetId) private view returns (uint256) {
        return ERC20(_assetId).balanceOf(address(this));
    }

    /// @dev Ensure that the address is a deployed contract
    /// @param _contract The address to check
    function _validateContractAddress(address _contract) private view {
        assembly {
            if iszero(extcodesize(_contract)) { revert(0, 0) }
        }
    }

    /// @dev Fix for ERC-20 tokens that do not have proper return type
    /// See: https://github.com/ethereum/solidity/issues/4116
    /// https://medium.com/loopring-protocol/an-incompatibility-in-smart-contract-threatening-dapp-ecosystem-72b8ca5db4da
    /// https://github.com/sec-bit/badERC20Fix/blob/master/badERC20Fix.sol
    /// @param _data The data returned from a transfer call
    function _validateContractCallResult(bytes memory _data) private pure {
        require(
            _data.length == 0 ||
            (_data.length == 32 && _getUint256FromBytes(_data) != 0),
            "Invalid contract call result"
        );
    }

    /// @dev A thin wrapper around the native `call` function, to
    /// validate that the contract `call` must be successful.
    /// See https://solidity.readthedocs.io/en/v0.5.1/050-breaking-changes.html
    /// for details on constructing the `_payload`
    /// @param _contract Address of the contract to call
    /// @param _payload The data to call the contract with
    /// @return The data returned from the contract call
    function _callContract(
        address _contract,
        bytes memory _payload
    )
        private
        returns (bytes memory)
    {
        bool success;
        bytes memory returnData;

        (success, returnData) = _contract.call(_payload);
        require(success, "Contract call failed");

        return returnData;
    }

    /// @dev Converts data of type `bytes` into its corresponding `uint256` value
    /// @param _data The data in bytes
    /// @return The corresponding `uint256` value
    function _getUint256FromBytes(
        bytes memory _data
    )
        private
        pure
        returns (uint256)
    {
        uint256 parsed;
        assembly { parsed := mload(add(_data, 32)) }
        return parsed;
    }
}
