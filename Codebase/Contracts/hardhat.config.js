require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
    },
    fuji: {
      url: process.env.FUJI_URL,
      chainId: 43113,
      accounts: [process.env.PRIVATE_KEY],
      timeout: 60000, // 60 seconds
      gasPrice: "auto",
      gas: "auto"
    }
  },
  etherscan: {
    apiKey: {
      avalancheFujiTestnet: "snowtrace_api_key" // Add this if you want to verify
    }
  }
};