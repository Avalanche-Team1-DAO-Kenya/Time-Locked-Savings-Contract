const hre = require("hardhat");

async function main() {
    // Get the deployed contract address (replace with your deployed address)
    const CONTRACT_ADDRESS = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    
    const TimeLockSavings = await hre.ethers.getContractFactory("TimeLockSavings");
    const timeLock = TimeLockSavings.attach(CONTRACT_ADDRESS);

    // Get deposits
    const deposits = await timeLock.getDeposits();
    console.log("Current deposits:", deposits);

    // Withdraw from first deposit (if exists)
    if (deposits.length > 0) {
        console.log("Withdrawing from deposit 0...");
        const tx = await timeLock.withdraw(0);
        await tx.wait();
        console.log("Withdrawal complete:", tx.hash);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 