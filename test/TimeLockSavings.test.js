const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("TimeLockSavings", function () {
    let timeLock;
    let owner, user, penaltyWallet;
    const WEEK = 7 * 24 * 60 * 60;

    beforeEach(async function () {
        [owner, user, penaltyWallet] = await ethers.getSigners();
        
        const TimeLockSavings = await ethers.getContractFactory("TimeLockSavings");
        timeLock = await TimeLockSavings.deploy(penaltyWallet.address);
        await timeLock.waitForDeployment();
    });

    describe("Deposits", function () {
        it("Should make a deposit successfully", async function () {
            const amount = ethers.parseEther("1");
            const reason = "Test deposit";
            const currentTime = await time.latest();
            const maturityDate = currentTime + WEEK;

            await timeLock.connect(user).deposit(reason, maturityDate, {
                value: amount
            });

            const deposits = await timeLock.connect(user).getDeposits();
            expect(deposits[0].amount).to.equal(amount);
            expect(deposits[0].reason).to.equal(reason);
            expect(deposits[0].maturityDate).to.equal(maturityDate);
            expect(deposits[0].withdrawn).to.equal(false);
        });

        it("Should reject deposit with zero amount", async function () {
            const currentTime = await time.latest();
            const maturityDate = currentTime + WEEK;

            await expect(
                timeLock.connect(user).deposit("Test", maturityDate, {
                    value: 0
                })
            ).to.be.revertedWith("Deposit amount must be greater than 0");
        });

        it("Should reject deposit with past maturity date", async function () {
            const amount = ethers.parseEther("1");
            const currentTime = await time.latest();
            const pastDate = currentTime - WEEK;

            await expect(
                timeLock.connect(user).deposit("Test", pastDate, {
                    value: amount
                })
            ).to.be.revertedWith("Maturity date must be in the future");
        });
    });

    describe("Withdrawals", function () {
        it("Should apply penalty for early withdrawal", async function () {
            const amount = ethers.parseEther("1");
            const reason = "Test deposit";
            const currentTime = await time.latest();
            const maturityDate = currentTime + WEEK;

            await timeLock.connect(user).deposit(reason, maturityDate, {
                value: amount
            });

            const penaltyWalletBalanceBefore = await ethers.provider.getBalance(penaltyWallet.address);
            const userBalanceBefore = await ethers.provider.getBalance(user.address);

            const tx = await timeLock.connect(user).withdraw(0);
            const receipt = await tx.wait();
            const gasUsed = receipt.gasUsed * receipt.gasPrice;

            const penaltyWalletBalanceAfter = await ethers.provider.getBalance(penaltyWallet.address);
            const userBalanceAfter = await ethers.provider.getBalance(user.address);

            // Check penalty wallet received 10%
            const expectedPenalty = amount * 10n / 100n;
            expect(penaltyWalletBalanceAfter - penaltyWalletBalanceBefore).to.equal(expectedPenalty);

            // Check user received 90% minus gas
            const expectedUserAmount = amount - expectedPenalty;
            const actualUserChange = userBalanceAfter - userBalanceBefore + gasUsed;
            expect(actualUserChange).to.equal(expectedUserAmount);
        });

        it("Should allow full withdrawal after maturity", async function () {
            const amount = ethers.parseEther("1");
            const reason = "Test deposit";
            const currentTime = await time.latest();
            const maturityDate = currentTime + WEEK;

            await timeLock.connect(user).deposit(reason, maturityDate, {
                value: amount
            });

            // Increase time to after maturity - convert to BigInt
            await time.increaseTo(BigInt(maturityDate) + 1n);

            const balanceBefore = await ethers.provider.getBalance(user.address);
            const tx = await timeLock.connect(user).withdraw(0);
            const receipt = await tx.wait();
            const gasUsed = receipt.gasUsed * receipt.gasPrice;

            const balanceAfter = await ethers.provider.getBalance(user.address);

            // Convert all values to BigInt for comparison
            const actualChange = balanceAfter - balanceBefore + BigInt(gasUsed);
            expect(actualChange).to.equal(amount);
        });

        it("Should prevent double withdrawal", async function () {
            const amount = ethers.parseEther("1");
            const reason = "Test deposit";
            const currentTime = await time.latest();
            const maturityDate = currentTime + WEEK;

            await timeLock.connect(user).deposit(reason, maturityDate, {
                value: amount
            });

            await timeLock.connect(user).withdraw(0);

            await expect(
                timeLock.connect(user).withdraw(0)
            ).to.be.revertedWith("Already withdrawn");
        });
    });

    describe("Admin functions", function () {
        it("Should allow owner to update penalty rate", async function () {
            const newPenalty = 15;
            await timeLock.connect(owner).setPenaltyRate(newPenalty);
            expect(await timeLock.earlyWithdrawalPenalty()).to.equal(newPenalty);
        });

        it("Should prevent non-owner from updating penalty rate", async function () {
            await expect(
                timeLock.connect(user).setPenaltyRate(15)
            ).to.be.revertedWithCustomError(timeLock, "OwnableUnauthorizedAccount");
        });

        it("Should prevent setting penalty rate above 20%", async function () {
            await expect(
                timeLock.connect(owner).setPenaltyRate(21)
            ).to.be.revertedWith("Penalty too high");
        });
    });
});

