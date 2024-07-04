# Aave V3 Deployment and Interaction

This project provides deployment and interaction scripts for the Aave V3 protocol on the Sepolia testnet. The scripts include functionality for supplying and withdrawing tokens, as well as borrowing and repaying loans.

## Prerequisites

- Node.js (v12.x, v14.x, or v16.x)
- npm or yarn
- Hardhat
- A Web3 provider (e.g., Infura or Alchemy)

## Setting up the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Pratima-M1/Aave_V3_Clone.git
   cd Aave_V3_Clone
   ```

   2. **Install Dependencies**

   ```
   npm install
   ```

   ```
   npm run compile
   ```

### Deployment

1. replace .env.example by .env
   replace
   ALCHEMY_KEY=
   MNEMONIC=

   ETHERSCAN_KEY=

   RPC_URL=
   PRIVATE_KEY=

2. npx hardhat deploy --network NETWORK
   select network of your choice(ex: hardhat or sepolia )

3. To supply and withdraw asset
   replace the address in supplyAndWithdraw.js
   const faucet_address = "";
   const aaveAddress = "";
   const daiAddress = "";
   const linkAddress = "";
   //proxy pool address
   const poolAddress = "";
   const poolProvider = "";

   and
   run

```
npx hardhat run scripts/supplyAndWithdraw.js --network NETWORK
```

4. To borrow and repay replace address in borrowAndRepay.js
   replace the address in supplyAndWithdraw.js
   const faucet_address = "";
   const aaveAddress = "";
   const daiAddress = "";
   const linkAddress = "";
   //proxy pool address
   const poolAddress = "";
   const poolProvider = "";

and run

```
npx hardhat run scripts/borrowAndRepay.js --network NETWORK
```

## DeployedAddress(Sepolia Network)

- **Faucet contract** : ["0x7d3E2922b7333efeA1570c0DFd279e1f628c80E9"](https://sepolia.etherscan.io/address/0x7d3E2922b7333efeA1570c0DFd279e1f628c80E9);

- **AAVE erc20 token** : ["0xF738fEa4792Ad244483336e7f043fD3C76060412"](https://sepolia.etherscan.io/address/0xF738fEa4792Ad244483336e7f043fD3C76060412)

- **DAI erc20 token** : ["0xc153955295C3FaEF9814081cD9d3c9BF79e89BC3"](https://sepolia.etherscan.io/address/0xc153955295C3FaEF9814081cD9d3c9BF79e89BC3)

- **LINK erc20 token** : ["0x0429AeAb561d1e8B235144e32F70eF3A51075f7F"](https://sepolia.etherscan.io/address/0x0429AeAb561d1e8B235144e32F70eF3A51075f7F)

- **Proxy Pool Contract**
  //proxy pool address : ["0xDd823E5d36cBB2f79a7857ba6E0f73Db0f335265"](https://sepolia.etherscan.io/address/0xDd823E5d36cBB2f79a7857ba6E0f73Db0f335265)

-**PoolAddressesProvider contract** : ["0x4b930b87fAF4f6a1d9c5c0Af546cBFd89E34D9a9"](https://sepolia.etherscan.io/address/0x4b930b87fAF4f6a1d9c5c0Af546cBFd89E34D9a9)

## Transactions

- **Supply Asset**:[supply](https://sepolia.etherscan.io/tx/0xd5af6f8f721ac401376e87ab9d77414604be24dd98d5081dfb057cbd472ced4c)
- **Withdraw asset** : [withdraw](https://sepolia.etherscan.io/tx/0x9eb9f360394a94d9db985a0fd92218d2f8b0fe525d2017981161d59a09553591)
- **Borrow Asset** : [borrow](https://sepolia.etherscan.io/tx/0x3383ccf9c01c3ea53e5c7390dd711ee16b3ece651f9b08b9a8fa3de8e0d78726)
- **Repay Asset** : [repay](https://sepolia.etherscan.io/tx/0x4d5ccedc776a4a34e9a2ccf24d0c2bd70f7a351631487d21df110c014b298042)
