
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "busy sniff vague north scissors resist math rely arctic order hope proof";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      networkCheckTimeout: 20000,
      timeoutBlocks: 2000,
      provider: function() {
        return new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/7a50ff82bc5d47a399d5e163e9d41e6f");
      },
      network_id: "4", // Match any network id
    },
    mainnet: {
      provider: function() {
        return new HDWalletProvider(mnemonic,"使用你的infura mainnet ENDPOINT");
      },
      network_id: "*" // Match any network id
    }
  }
};
