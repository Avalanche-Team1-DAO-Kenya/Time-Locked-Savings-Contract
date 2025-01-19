// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TimeLockSavings is ReentrancyGuard, Ownable {
    struct Deposit {
        uint256 amount;
        uint256 lockTime;
        bool withdrawn;
    }
    
    mapping(address => Deposit[]) public deposits;
    uint256 public earlyWithdrawalPenalty = 10; // 10% penalty
    
    event DepositMade(address indexed depositor, uint256 amount, uint256 lockTime);
    event WithdrawalMade(address indexed depositor, uint256 amount, bool early);
    
    constructor() Ownable(msg.sender) {}
    
    function deposit(uint256 _lockDuration) external payable {
        require(msg.value > 0, "Deposit some amount");
        uint256 lockTime = block.timestamp + _lockDuration;
        
        deposits[msg.sender].push(Deposit({
            amount: msg.value,
            lockTime: lockTime,
            withdrawn: false
        }));
        
        emit DepositMade(msg.sender, msg.value, lockTime);
    }
    
    function withdraw(uint256 _depositIndex) external nonReentrant {
        Deposit storage userDeposit = deposits[msg.sender][_depositIndex];
        require(!userDeposit.withdrawn, "Already withdrawn");
        require(userDeposit.amount > 0, "No deposit found");
        
        uint256 amount = userDeposit.amount;
        bool early = block.timestamp < userDeposit.lockTime;
        
        if (early) {
            uint256 penalty = (amount * earlyWithdrawalPenalty) / 100;
            amount -= penalty;
        }
        
        userDeposit.withdrawn = true;
        payable(msg.sender).transfer(amount);
        
        emit WithdrawalMade(msg.sender, amount, early);
    }
    
    function getDeposits() external view returns (Deposit[] memory) {
        return deposits[msg.sender];
    }
    
    function setPenalty(uint256 _newPenalty) external onlyOwner {
        require(_newPenalty <= 20, "Penalty too high");
        earlyWithdrawalPenalty = _newPenalty;
    }
}