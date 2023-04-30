const MYCOIN = artifacts.require("MYCOIN");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("MYCOIN", function (accounts) {

  it("should assert true", async function () {
    await MYCOIN.deployed();
    return assert.isTrue(true);
  });

});
