const MYCOIN = artifacts.require("MYCOIN");

module.exports = function(deployer, network, accounts) {

  if (network == "live") {
    // Do something specific to the network named "live".
  } else {
    // Perform a different step otherwise.
  }

  deployer.deploy(MYCOIN);
};