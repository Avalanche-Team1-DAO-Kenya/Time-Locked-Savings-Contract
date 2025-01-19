const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // This is the address that will receive the penalties
  const penaltiesWallet = "0x45B9816b466bAbcF4933D13888e7Dd44305A103c"; // Make sure this is the address you want to use
  console.log("Penalties wallet:", penaltiesWallet);

  const TimeLockSavings = await hre.ethers.getContractFactory("TimeLockSavings");
  const timeLockSavings = await TimeLockSavings.deploy(penaltiesWallet);

  await timeLockSavings.waitForDeployment();
  const address = await timeLockSavings.getAddress();

  console.log("TimeLockSavings deployed to:", address);

  // Wait for a few block confirmations
  console.log("Waiting for confirmations...");
  await timeLockSavings.deploymentTransaction().wait(6);
  
  console.log("Deployment confirmed!");
  
  // Verify the contract on Snowtrace
  console.log("Verifying contract on Snowtrace...");
  try {
    await hre.run("verify:verify", {
      address: address,
      constructorArguments: [penaltiesWallet],  // Include constructor arguments here
    });
    console.log("Contract verified successfully");
  } catch (e) {
    console.log("Verification failed:", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 