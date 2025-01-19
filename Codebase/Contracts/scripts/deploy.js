const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const penaltiesWallet = "0x45B9816b466bAbcF4933D13888e7Dd44305A103c"; 
  
  const TimeLockSavings = await hre.ethers.getContractFactory("TimeLockSavings");
  const timeLock = await TimeLockSavings.deploy(penaltiesWallet);

  await timeLock.waitForDeployment();
  const address = await timeLock.getAddress();
  console.log("TimeLockSavings deployed to:", address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
}); 