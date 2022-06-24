
const hre = require("hardhat");

async function main() {
  
  const GetPrice = await hre.ethers.getContractFactory("GetPrice");
  const getPrice = await GetPrice.deploy();

  await getPrice.deployed();

  console.log("GetPrice deployed to:", getPrice.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
