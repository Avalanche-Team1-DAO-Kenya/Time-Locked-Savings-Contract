# TimeLock Savings DApp

A decentralized application for time-locked savings with early withdrawal penalties, built on the Avalanche Fuji Testnet. Users can deposit funds with a maturity date and withdraw them (with penalties if early).

![DApp Preview](public/dapp-preview.png)

## Features
- 🔒 Deposit funds with a reason and maturity date
- ⏳ Withdraw funds (penalty if before maturity)
- 📊 Transaction history & savings summary
- 🌓 Dark/Light mode toggle
- 🦊 MetaMask wallet integration
- 🎨 Styled with Tailwind CSS v4

## Tech Stack
- **Frontend**: React + Vite
- **Styling**: Tailwind CSS v4
- **Blockchain**: Ethers.js v6
- **Network**: Avalanche Fuji Testnet
- **Smart Contracts**: Solidity (OpenZeppelin)

## Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Yarn](https://yarnpkg.com/) or npm
- [MetaMask](https://metamask.io/) (configured for Fuji Testnet)
- Fuji Testnet AVAX ([Get from Faucet](https://faucet.avax.network/))

## Setup Instructions

1. Clone Repository
```bash
git clone 
cd timelock-savings-dapp
2. Install Dependencies
bash
Copy
yarn install
# or
npm install
3. Configure Environment
Create .env file in root directory:

env
Copy
VITE_CONTRACT_ADDRESS="0x96E8EfB82D9F647642c986A5e2De4EE3A31f95AA"
Update contract details in:

src/utils/constants.js

src/contracts/TimeLockSavings.json (ABI)

4. Configure Tailwind CSS v4
    Follow then instructions from this link: https://tailwindcss.com/docs/installation/using-vite

5. Run Development Server
bash
Copy
yarn dev
# or 
npm run dev
Deployment Configuration
1. Smart Contract
Deploy contract to Fuji Testnet:

bash
Copy
npx hardhat run scripts/deploy.js --network fuji
Verify contract on Fuji Snowtrace:

bash
Copy
npx hardhat verify --network fuji <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGUMENTS>
2. Frontend Updates
After deployment:

Update VITE_CONTRACT_ADDRESS in .env

Replace ABI in src/contracts/TimeLockSavings.json

Rebuild and deploy frontend:

bash
Copy
yarn build
# Deploy to your preferred hosting (Netlify/Vercel/GitHub Pages)
Testing the DApp
Connect MetaMask to Fuji Testnet

Fund wallet with testnet AVAX

Test deposit flow:

Enter amount (ETH)

Add reason

Select future date

Test withdrawal:

Mature vs early withdrawal

Check penalty deductions

Troubleshooting
Issue	Solution
"Contract not connected"	Verify contract address & ABI match deployment
Transaction failures	Ensure sufficient AVAX for gas fees
Network errors	Confirm MetaMask is on Fuji Testnet (ChainID 43113)
Styling issues	Check Tailwind v4 class names & purge config
License
MIT License - see LICENSE for details