const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TimeLockModule", (m) => {
    const timeLock = m.contract("TimeLockSavings");
    return { timeLock };
});