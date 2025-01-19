const hre = require("hardhat");

async function main() {
    // Get the deployed contract
    const contractAddress = "DEPLOYED_CONTRACT_ADDRESS"; // Replace with your deployed contract address
    const TimeLockSavings = await hre.ethers.getContractFactory("TimeLockSavings");
    const timeLock = TimeLockSavings.attach(contractAddress);

    // Example deposit
    const amount = hre.ethers.parseEther("0.1");
    const reason = "Test deposit";
    const oneWeek = 7 * 24 * 60 * 60;
    const maturityDate = Math.floor(Date.now() / 1000) + oneWeek;

    // Get signer
    const [signer] = await hre.ethers.getSigners();

    // Create and sign message
    const messageHash = hre.ethers.solidityPackedKeccak256(
        ["address", "uint256", "string", "uint256"],
        [signer.address, amount, reason, maturityDate]
    );
    const signature = await signer.signMessage(hre.ethers.getBytes(messageHash));

    // Make deposit
    console.log("Making deposit...");
    const tx = await timeLock.deposit(reason, maturityDate, signature, {
        value: amount
    });
    await tx.wait();
    console.log("Deposit made:", tx.hash);

    // Get deposits
    const deposits = await timeLock.getDeposits();
    console.log("Current deposits:", deposits);

    // Example withdrawal (if you want to test it)
    // console.log("Withdrawing...");
    // const withdrawTx = await timeLock.withdraw(0);
    // await withdrawTx.wait();
    // console.log("Withdrawal complete:", withdrawTx.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 