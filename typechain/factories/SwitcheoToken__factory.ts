/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwitcheoToken, SwitcheoTokenInterface } from "../SwitcheoToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_lockProxyAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lockProxyAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001ab938038062001ab9833981810160405281019062000037919062000204565b6040518060400160405280600e81526020017f537769746368656f20546f6b656e0000000000000000000000000000000000008152506040518060400160405280600481526020017f535754480000000000000000000000000000000000000000000000000000000081525060088260039080519060200190620000bd9291906200013d565b508160049080519060200190620000d69291906200013d565b5080600560006101000a81548160ff021916908360ff16021790555050505080600560016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620002e3565b8280546200014b9062000264565b90600052602060002090601f0160209004810192826200016f5760008555620001bb565b82601f106200018a57805160ff1916838001178555620001bb565b82800160010185558215620001bb579182015b82811115620001ba5782518255916020019190600101906200019d565b5b509050620001ca9190620001ce565b5090565b5b80821115620001e9576000816000905550600101620001cf565b5090565b600081519050620001fe81620002c9565b92915050565b6000602082840312156200021757600080fd5b60006200022784828501620001ed565b91505092915050565b60006200023d8262000244565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060028204905060018216806200027d57607f821691505b602082108114156200029457620002936200029a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b620002d48162000230565b8114620002e057600080fd5b50565b6117c680620002f36000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80634ad43eda1161008c57806395d89b411161006657806395d89b411461022a578063a457c2d714610248578063a9059cbb14610278578063dd62ed3e146102a8576100cf565b80634ad43eda146101be57806370a08231146101dc5780639358928b1461020c576100cf565b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461012257806323b872dd14610140578063313ce56714610170578063395093511461018e575b600080fd5b6100dc6102d8565b6040516100e9919061127e565b60405180910390f35b61010c600480360381019061010791906110a2565b61036a565b6040516101199190611263565b60405180910390f35b61012a610381565b6040516101379190611380565b60405180910390f35b61015a60048036038101906101559190611053565b61038b565b6040516101679190611263565b60405180910390f35b61017861043c565b604051610185919061139b565b60405180910390f35b6101a860048036038101906101a391906110a2565b610453565b6040516101b59190611263565b60405180910390f35b6101c66104f8565b6040516101d39190611248565b60405180910390f35b6101f660048036038101906101f19190610fee565b61051e565b6040516102039190611380565b60405180910390f35b610214610566565b6040516102219190611380565b60405180910390f35b6102326105b1565b60405161023f919061127e565b60405180910390f35b610262600480360381019061025d91906110a2565b610643565b60405161026f9190611263565b60405180910390f35b610292600480360381019061028d91906110a2565b6106e8565b60405161029f9190611263565b60405180910390f35b6102c260048036038101906102bd9190611017565b6106ff565b6040516102cf9190611380565b60405180910390f35b6060600380546102e7906114e4565b80601f0160208091040260200160405190810160405280929190818152602001828054610313906114e4565b80156103605780601f1061033557610100808354040283529160200191610360565b820191906000526020600020905b81548152906001019060200180831161034357829003601f168201915b5050505050905090565b6000610377338484610786565b6001905092915050565b6000600254905090565b6000610398848484610951565b610431843361042c85600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ac090919063ffffffff16565b610786565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60006104ee33846104e985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b0a90919063ffffffff16565b610786565b6001905092915050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60006105ac610596600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661051e565b61059e610381565b610ac090919063ffffffff16565b905090565b6060600480546105c0906114e4565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec906114e4565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b5050505050905090565b60006106de33846106d985600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ac090919063ffffffff16565b610786565b6001905092915050565b60006106f5338484610951565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107f6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ed90611340565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610866576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085d906112c0565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109449190611380565b60405180910390a3505050565b600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ab057600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2f90611300565b60405180910390fd5b6000610a65600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff1661051e565b905081811015610aae57610aad600560019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16610aa88385610ac090919063ffffffff16565b610b68565b5b505b610abb838383610cf0565b505050565b6000610b0283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f60565b905092915050565b6000808284610b1991906113d2565b905083811015610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b55906112e0565b60405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bcf90611360565b60405180910390fd5b610bed81600254610b0a90919063ffffffff16565b600281905550610c44816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b0a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ce49190611380565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d60576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d5790611320565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610dd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc7906112a0565b60405180910390fd5b610e21816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ac090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610eb4816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610b0a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f539190611380565b60405180910390a3505050565b6000838311158290610fa8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9f919061127e565b60405180910390fd5b5060008385610fb79190611428565b9050809150509392505050565b600081359050610fd381611762565b92915050565b600081359050610fe881611779565b92915050565b60006020828403121561100057600080fd5b600061100e84828501610fc4565b91505092915050565b6000806040838503121561102a57600080fd5b600061103885828601610fc4565b925050602061104985828601610fc4565b9150509250929050565b60008060006060848603121561106857600080fd5b600061107686828701610fc4565b935050602061108786828701610fc4565b925050604061109886828701610fd9565b9150509250925092565b600080604083850312156110b557600080fd5b60006110c385828601610fc4565b92505060206110d485828601610fd9565b9150509250929050565b6110e78161145c565b82525050565b6110f68161146e565b82525050565b6000611107826113b6565b61111181856113c1565b93506111218185602086016114b1565b61112a81611574565b840191505092915050565b60006111426023836113c1565b915061114d82611585565b604082019050919050565b60006111656022836113c1565b9150611170826115d4565b604082019050919050565b6000611188601b836113c1565b915061119382611623565b602082019050919050565b60006111ab6039836113c1565b91506111b68261164c565b604082019050919050565b60006111ce6025836113c1565b91506111d98261169b565b604082019050919050565b60006111f16024836113c1565b91506111fc826116ea565b604082019050919050565b6000611214601f836113c1565b915061121f82611739565b602082019050919050565b6112338161149a565b82525050565b611242816114a4565b82525050565b600060208201905061125d60008301846110de565b92915050565b600060208201905061127860008301846110ed565b92915050565b6000602082019050818103600083015261129881846110fc565b905092915050565b600060208201905081810360008301526112b981611135565b9050919050565b600060208201905081810360008301526112d981611158565b9050919050565b600060208201905081810360008301526112f98161117b565b9050919050565b600060208201905081810360008301526113198161119e565b9050919050565b60006020820190508181036000830152611339816111c1565b9050919050565b60006020820190508181036000830152611359816111e4565b9050919050565b6000602082019050818103600083015261137981611207565b9050919050565b6000602082019050611395600083018461122a565b92915050565b60006020820190506113b06000830184611239565b92915050565b600081519050919050565b600082825260208201905092915050565b60006113dd8261149a565b91506113e88361149a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561141d5761141c611516565b5b828201905092915050565b60006114338261149a565b915061143e8361149a565b92508282101561145157611450611516565b5b828203905092915050565b60006114678261147a565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b838110156114cf5780820151818401526020810190506114b4565b838111156114de576000848401525b50505050565b600060028204905060018216806114fc57607f821691505b602082108114156115105761150f611545565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f536166654d6174683a206164646974696f6e206f766572666c6f770000000000600082015250565b7f537769746368656f546f6b656e3a206c6f636b50726f78792073686f756c642060008201527f6e6f742063616c6c207472616e7366657220746f2073656c6600000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61176b8161145c565b811461177657600080fd5b50565b6117828161149a565b811461178d57600080fd5b5056fea26469706673582212205a627b632e0e15ed6535a22b3ddf9cfde4aed4c0967054b3bb1a56567c13e4f664736f6c63430008040033";

export class SwitcheoToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _lockProxyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SwitcheoToken> {
    return super.deploy(
      _lockProxyAddress,
      overrides || {}
    ) as Promise<SwitcheoToken>;
  }
  getDeployTransaction(
    _lockProxyAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_lockProxyAddress, overrides || {});
  }
  attach(address: string): SwitcheoToken {
    return super.attach(address) as SwitcheoToken;
  }
  connect(signer: Signer): SwitcheoToken__factory {
    return super.connect(signer) as SwitcheoToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwitcheoTokenInterface {
    return new utils.Interface(_abi) as SwitcheoTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwitcheoToken {
    return new Contract(address, _abi, signerOrProvider) as SwitcheoToken;
  }
}
