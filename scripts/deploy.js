// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main(token,lockproxy) {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const WrapperPort = await hre.ethers.getContractFactory(token);
  const port = await WrapperPort.deploy(lockproxy);

  await port.deployed();

  console.log("port token deployed to", port.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main("SwitcheoToken","0x91f453851e297524749a740d53cf54a89231487c")
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });