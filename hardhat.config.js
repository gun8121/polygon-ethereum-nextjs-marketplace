require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
require('dotenv').config();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
   goerli: {
      Infura
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`
      accounts: [process.env.METAMASK_KEY]
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

