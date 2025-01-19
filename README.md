# Time-Locked Savings Contract

A smart contract that enables users to create time-locked savings deposits with early withdrawal penalties, built on the Avalanche network.

## Overview

The Time-Locked Savings Contract is a decentralized application that allows users to:
- Make deposits with specified maturity dates
- Withdraw funds after maturity with no penalty
- Make early withdrawals with a configurable penalty fee
- Track multiple deposits with different maturity dates

## Features

- **Secure Deposits**: Users can deposit AVAX with custom maturity dates
- **Penalty System**: Early withdrawals incur a configurable penalty (default 10%)
- **Multiple Deposits**: Users can maintain multiple active deposits
- **Penalty Collection**: Early withdrawal penalties are sent to a designated wallet
- **Owner Controls**: Contract owner can adjust penalty rates (max 20%)

## Technology Stack

- Solidity ^0.8.20
- Hardhat Development Environment
- OpenZeppelin Contracts
- Avalanche Fuji Testnet
- Node.js
- Ethers.js

## Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- An Avalanche wallet with test AVAX
- Basic knowledge of blockchain and smart contracts

## Installation

1. Clone the repository:
bash
git clone https://github.com/yourusername/time-locked-savings-contract.git
cd time-locked-savings-contract

2. Install dependencies:
bash
npm install

3. Create a `.env` file:
env
PRIVATE_KEY=your_private_key
FUJI_RPC_URL=https://api.avax-test.network/ext/bc/C/rpc

## Contract Structure

### Main Components

- `struct Deposit`: Stores deposit information (amount, reason, maturity date, withdrawal status)
- `mapping(address => Deposit[])`: Tracks user deposits
- `earlyWithdrawalPenalty`: Configurable penalty rate
- `penaltiesWallet`: Address receiving penalty fees

### Key Functions

- `deposit(string reason, uint256 maturityDate)`: Create a new time-locked deposit
- `withdraw(uint256 depositIndex)`: Withdraw funds (with or without penalty)
- `setPenaltyRate(uint256 _newPenalty)`: Update penalty rate (owner only)
- `getDeposits()`: View all deposits for the caller

## Testing

Run the test suite:
bash
npx hardhat test

The tests cover:
- Deposit functionality
- Withdrawal mechanics
- Penalty calculations
- Owner controls
- Edge cases

## Deployment

Deploy to Fuji testnet:
npx hardhat run scripts/deploy.js --network fuji

## Security Considerations

- ReentrancyGuard implementation
- Owner access control
- Secure withdrawal pattern
- Input validation
- Time-based logic checks

## Contract Interaction

### Making a Deposit
javascript
const amount = ethers.parseEther("1");
const reason = "Vacation savings";
const maturityDate = Math.floor(Date.now() / 1000) + (30 24 60 60); // 30 days
await contract.deposit(reason, maturityDate, { value: amount });

### Withdrawing Funds
javascript
await contract.withdraw(depositIndex);

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenZeppelin for secure contract implementations
- Avalanche team for the network infrastructure
- Hardhat team for the development environment

## Contact
 Email: titusmainakamau053@gmail.com
 github: https://github.com/TitoKamau053
