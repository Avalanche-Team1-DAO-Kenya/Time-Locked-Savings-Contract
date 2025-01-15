const { expect } = require("chai");
const { ethers } = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

describe("TimeLockSavings", function () {
    let timeLockSavings;
    let owner;
    let user;
    
    beforeEach(async function () {
        [owner, user] = await ethers.getSigners();
        
        const TimeLockSavings = await ethers.getContractFactory("TimeLockSavings");
        timeLockSavings = await TimeLockSavings.deploy();
    });
    
    describe("Deposits", function () {
        it("Should allow deposits with lock time", async function () {
            const depositAmount = ethers.parseEther("1");
            const lockDuration = 86400; // 1 day
            
            await timeLockSavings.connect(user).deposit(lockDuration, { value: depositAmount });
            
            const deposits = await timeLockSavings.getUserDeposits(user.address);
            expect(deposits[0].amount).to.equal(depositAmount);
        });
    });
    
    describe("Withdrawals", function () {
        it("Should apply penalty for early withdrawal", async function () {
            const depositAmount = ethers.parseEther("1");
            const lockDuration = 86400; // 1 day
            
            await timeLockSavings.connect(user).deposit(lockDuration, { value: depositAmount });
            
            const initialBalance = await ethers.provider.getBalance(user.address);
            await timeLockSavings.connect(user).withdraw(0);
            
            const finalBalance = await ethers.provider.getBalance(user.address);
            expect(finalBalance).to.be.below(initialBalance);
        });
        
        it("Should allow full withdrawal after lock period", async function () {
            const depositAmount = ethers.parseEther("1");
            const lockDuration = 86400; // 1 day
            
            await timeLockSavings.connect(user).deposit(lockDuration, { value: depositAmount });
            await time.increase(lockDuration + 1);
            
            const initialBalance = await ethers.provider.getBalance(user.address);
            await timeLockSavings.connect(user).withdraw(0);
            
            const finalBalance = await ethers.provider.getBalance(user.address);
            expect(finalBalance).to.be.closeTo(initialBalance, ethers.parseEther("0.001")); // Account for gas
        });
    });
});