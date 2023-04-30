# Web3 Contract dApp

- Development with truffle
- Deploying on Local, Testnet and Mainnet

Install first:

- https://nodejs.org/en
- https://git-scm.com/

On Macbook for git installation type in terminal `xcode-select --install`

# Online Developing

Online editor:

https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null

Binance Smart Chain docs:

https://docs.bnbchain.org/docs/remix-new

# Local Developing

Install [truffle](https://trufflesuite.com/docs/truffle/)

```bash
$ npm install -g truffle
```

Check truffle

```bash
$ truffle version
```

Output for full needed

```bash
truffle v5.8.3 (core: 5.8.3)
Ganache v7.8.0
Solidity v0.5.16 (solc-js)
Node v18.16.0
Web3.js v1.8.2
```

Truffle
https://trufflesuite.com/docs/

Solidity
https://docs.soliditylang.org/en/v0.8.19/

Binance Smart Chain docs:
https://docs.bnbchain.org/docs/truffle-new

Developing with truffle and ganache for VSCode [Extension](https://marketplace.visualstudio.com/items?itemName=trufflesuite-csi.truffle-vscode#:~:text=Truffle%20for%20VS%20Code%20simplifies,Truffle%2C%20Ganache%2C%20and%20Infura.)

> ### TIP
> Use [nvm](https://github.com/nvm-sh/nvm) to manage your node versions

## Development

Create contract, migration or test with truffle.

> Change to root in project if you in frontend folder.

```bash
projects$ cd /Users/username/projects/customer/year/newsletter/
```

```bash
newsletter$ truffle create contract YourNewCoin
```

```bash
newsletter$ truffle create migration YourNewCoin
```

```bash
newsletter$ truffle create test YourNewCoin
```

Build contracts created contract.

```bash
newsletter$ truffle compile
```

```bash
Compiling your contracts...
===========================
> Compiling ./contracts/MYCOIN.sol
> Artifacts written to /Users/username/Sites/testing/example/2023/newsletter/build/contracts
> Compiled successfully using:
   - solc: 0.8.13+commit.abaa5c0e.Emscripten.clang
```

Start developing with truffle

```bash
newsletter$ truffle develop
```

```bash
Truffle Develop started at http://127.0.0.1:8545/

Accounts:
(0) 0xa2dce071c3f6e47472ad6ea829sdfgsdfgdsrgmk
(1) 0x7b442c33257fcf7264d860d7sdgsdklgmlsdgjjd
(2) 0xa5084218c33f59ffc9c67ca49sdgsdgsdrgaergg
(3) 0x89407cc0bf84a73724d68858asrdgsrdg678drg8
(4) 0xae630561436c9a17c8aadsrgsdrgsdg89drgs897
(5) 0xf36cf5af3abab257728ddrgs76dsg976sdgsdr8g
(6) 0xb6a39f13111c6440ae49csrdgsdrgsdrg86sdr9g
(7) 0xc63674758c21eac21ebeb874sdrgsdrg87dsrg8g
(8) 0xcedaa7998b66da316dde6647adrsgsdrg879ugds
(9) 0x0c67baae1f5f6b3c0e4fsdgsdzg8zo8udsgo9u9u

Private Keys:
(0) 8d1dea0af062db74fdfd6c87cac3c99ad5477b08c4b46z5b756uzr5bu65bru6u
(1) 8714f17b41b9f32c942ae585c612914bd2dbf06a7bbc3t34t35z54z6zuu7u6b7
(2) 449474bb0b20e07cf3c044d91d30480617aabb1bad2c6663ctv45vz4z6ub5u75
(3) 60cc5b09d769506ec3b305c1fb88a4d4c2a2f43ba63ct44c35vz4z4z6b654bbv
(4) 6cd06d8ce7e051c86899fcd787786ec5f02e6c20492f32ct43v5z5545z45zb4b
(5) ed71b98ead1450d9838946619dc2a00bb177a5eec45zvb4bzu6u46u4646b6bu4
(6) 8220766f3867a72c8b27bd9cf84d5d4a3b74f57b53304bz554zb44b6z46zu46b
(7) 136a021389169ede23c410fb09412754da4217946dc6ni776ni6i5b76v76bnbn
(8) d961478a38f320b061f3ce91832ac84277c672af9eac3t43tvz5zv545zb5uuun
(9) 8149c8c89c4323896e334adb8a0626cb6d1008nl97867j7u56uj5bb5bv45v35c

Mnemonic: dghhj sdfgd utrkt sdhfsh sdhsdgfh ztklzitl ziltzl zulssd sdtghsh shtsht sdthsth sthsth

⚠️  Important ⚠️  : This mnemonic was created for you by Truffle. It is not secure.
Ensure you do not use it on production blockchains, or else you risk losing funds.

newsletter$ truffle(develop)>
```

Create a `.env` file in the project root folder with followed to deploy. And change this for testnet if neede or mainnet. We use here in this example the memoniac created from truffle for develop.

```bash
MNEMONIC=dghhj sdfgd utrkt sdhfsh sdhsdgfh ztklzitl ziltzl zulssd sdtghsh shtsht sdthsth sthsth
BSCSCANAPIKEY=
```

Deploying to the develop network

```bash
newsletter$ truffle(develop)> migrate --reset --network develop
```

Deploying to the testnet network

```bash
newsletter$ truffle(develop)> migrate --reset --network testnet
```

Deploying to the mainnet network

```bash
newsletter$ truffle(develop)> migrate --reset --network mainnet
```

To exit the truffle develop mode type.

```bash
newsletter$ truffle(develop)> .exit
```

# MetaMask

Setup your MetaMask for Local and all other networks.

Developing with MetaMask
https://docs.metamask.io/wallet/tutorials/simple-react-dapp/

## Local

The local MetaMask memoniac was created in truffle develop

```
Name: Localhost 8545
RPC: http://127.0.0.1:8545
ChainID: 1337
Symbol: ETH
```

## Testnet

> Create a new MetaMask wallet for testing only, to deploy in testnet and test.

You can claim faucet https://testnet.bnbchain.org/faucet-smart for the testnet.

```
Name: BSC Testnet
RPC: https://data-seed-prebsc-1-s1.binance.org:8545
ChainID: 97
Symbol: tBNB
```

## Mainnet

> For mainnet use MetaMask with a ledger or other safed wallet system.

```
Name: BSC Mainnet
RPC: https://bsc-dataseed1.binance.org
ChainID: 56
Symbol: BNB
```

# NPM

## Contracts

For `truffle compile`

```bash
newsletter$ npm run build
```

For `migrate --reset --network testnet` to migrate in testnet network

```bash
newsletter$ npm run testnet
```

For `migrate --reset --network mainnet` to migrate in mainnet network

```bash
newsletter$ npm run mainnet
```

## Frontend

Change for frontend in frontend folder always.

```bash
$ cd frontend/
```

Create production build

```bash
frontend$ npm run prod
```

Run webpack dev server

```bash
frontend$ npm run dev
```