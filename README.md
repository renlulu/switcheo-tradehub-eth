# Switcheo ERC20 Token Contract

This repository contains the tools for generating, deploying, verifying Switcheo ERC20 token contract.

## Setup

1. Installation

```
npm install
```

2. Prepare .env

```
INFURA_API_KEY=
MNEMONIC=
ETHERSCAN_API_KEY=
PRIVATE_KEY=
```

`INFURA_API_KEY` can be applied from `https://infura.io`, `ETHERSCAN_API_KEY` can be applied from `https://etherscan.io/`. You can either use mnemonic or private key base on `hardhat.config.ts`.

## Generate bridged token

1. Modify script `contracts/tokens/generate.js`:

```js
main("WrappedPortToken","Ethereum-bridged PORT Token","ePORT",4)
```

Use your own specific parameters but following the implicit naming convention, i.e., replace PORT by the ZRC-2 token symbol and replace `4` by the ZRC-2 token decimal.

2. Under folder `contracts/tokens`, run

```sh
node generate.js
```

### Deploy bridged token

1. Modify script `scripts/deploy.js`:

```
main("WrappedPortToken","0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54")
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Use your own token contract name, and proper lock proxy address: `0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54` on mainnet, `0x91f453851e297524749a740d53cf54a89231487c` on ropsten testnet.

2. Run script `deploy.sh`:

```sh
npx hardhat run --network <ropsten or mainnet> ./scripts/deploy.js
```

### Verify bridged token

1. Modify script `scripts/args.js`

```
module.exports = [
    '0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54',
];
```

Use proper lock proxy address: `0x9a016ce184a22dbf6c17daa59eb7d3140dbd1c54` on mainnet, `0x91f453851e297524749a740d53cf54a89231487c` on ropsten testnet.


2. Run script `verify.sh`:

```sh
npx hardhat verify --network <ropsten or mainnet> --constructor-args scripts/args.js <contract_address>
```


