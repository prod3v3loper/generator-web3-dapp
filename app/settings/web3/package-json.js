/**
 * The package.json for npm
 *
 * @see https://docs.npmjs.com/files/package.json
 * @see https://yeoman.io/authoring/dependencies.html
 */

module.exports = function createPackageJsonWeb3(answer) {
  const pkgJsonWeb3Conf = {
    name: answer.name ? answer.name : "generator-webpack-scaffold-pro",
    description: answer.description
      ? "'" + answer.description + "'"
      : "This is a Webpack Scaffolding in pro style with separated configs and better understandable in complex environments.",
    version: answer.version ? "'" + answer.version + "'" : "1.0.0",
    author: answer.author
      ? "'" + answer.author + "'"
      : "Samet Tarim aka prod3v3loper",
    private: answer.private ? "'" + answer.private + "'" : true,
    keywords: answer.keywords ? answer.keywords : ["web3-contract-dapp"],
    license: answer.license ? "'" + answer.license + "'" : "MIT License",
    scripts: {
      remove: "rm -rf build/",
      build: "truffle compile",
      dev: "truffle migrate --reset --network develop",
      testnet: "truffle migrate --reset --network testnet",
      mainnet: "truffle migrate --reset --network mainnet",
      test: "echo \"Error: no test specified\" && exit 1"
    },
    dependencies: {
      "@truffle/hdwallet-provider": "^1.2.3",
      "dotenv": "^16.0.3"
    },
    devDependencies: {
        "truffle-plugin-verify": "^0.6.2"
    }
  };

  return pkgJsonWeb3Conf;
};
