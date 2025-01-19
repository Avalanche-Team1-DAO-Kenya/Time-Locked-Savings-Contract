// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";

contract TimeLockSavings is ReentrancyGuard, Ownable {
    struct Deposit {
        uint256 amount;
        string reason;
        uint256 maturityDate;
        bool withdrawn;
    }
    
    mapping(address => Deposit[]) public deposits;
    uint256 public earlyWithdrawalPenalty = 10; // 10% penalty
    address public immutable penaltiesWallet;
    
    event DepositMade(
        address indexed depositor, 
        uint256 amount, 
        string reason,
        uint256 maturityDate,
        uint256 depositIndex
    );
    event WithdrawalMade(
        address indexed depositor, 
        uint256 amount, 
        bool early,
        uint256 penalty
    );
    event PenaltyRateUpdated(uint256 oldRate, uint256 newRate);
    
    constructor(address _penaltiesWallet) Ownable(msg.sender) {
        require(_penaltiesWallet != address(0), "Invalid penalties wallet");
        penaltiesWallet = _penaltiesWallet;
    }
    
    function deposit(
        string memory _reason,
        uint256 _maturityDate
    ) external payable nonReentrant {
        require(msg.value > 0, "Deposit amount must be greater than 0");
        require(_maturityDate > block.timestamp, "Maturity date must be in the future");
        require(bytes(_reason).length > 0, "Reason cannot be empty");
        
        uint256 depositIndex = deposits[msg.sender].length;
        deposits[msg.sender].push(Deposit({
            amount: msg.value,
            reason: _reason,
            maturityDate: _maturityDate,
            withdrawn: false
        }));
        
        emit DepositMade(msg.sender, msg.value, _reason, _maturityDate, depositIndex);
    }
    
    function withdraw(uint256 _depositIndex) external nonReentrant {
        require(_depositIndex < deposits[msg.sender].length, "Invalid deposit index");
        Deposit storage userDeposit = deposits[msg.sender][_depositIndex];
        
        require(!userDeposit.withdrawn, "Already withdrawn");
        require(userDeposit.amount > 0, "No deposit found");
        
        uint256 amount = userDeposit.amount;
        uint256 penalty = 0;
        bool early = block.timestamp < userDeposit.maturityDate;
        
        if (early) {
            penalty = (amount * earlyWithdrawalPenalty) / 100;
            amount -= penalty;
            
            // Transfer penalty to penalties wallet
            (bool penaltySuccess, ) = payable(penaltiesWallet).call{value: penalty}("");
            require(penaltySuccess, "Penalty transfer failed");
        }
        
        userDeposit.withdrawn = true;
        
        // Transfer remaining amount to user
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        
        emit WithdrawalMade(msg.sender, amount, early, penalty);
    }
    
    function getDeposits() external view returns (Deposit[] memory) {
        return deposits[msg.sender];
    }
    
    function setPenaltyRate(uint256 _newPenalty) external onlyOwner {
        require(_newPenalty <= 20, "Penalty too high");
        uint256 oldRate = earlyWithdrawalPenalty;
        earlyWithdrawalPenalty = _newPenalty;
        emit PenaltyRateUpdated(oldRate, _newPenalty);
    }
}

