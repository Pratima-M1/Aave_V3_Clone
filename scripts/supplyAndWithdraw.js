/* const faucet_address = "0xe4ED635faDba15d008FA7D2e06EFf6A9DdCf6868";
const aaveAddress = "0xb2cB3A612391E4dbC2b4e1762b2A0D56f496eAAf";
const daiAddress = "0xb913B2814483CFAD2309c731B08634f1a003e0B3";
const linkAddress = "0xb7513D67640f6bA516A268b1A56148a82b24163b";
//proxy pool address
const poolAddress = "0x20DCaBaA99d3Aa81822C209E207344b041a546a6";
const poolProvider = "0xBb8b847936A2b59F87d1dDE0E91014B7110Df320"; */
const faucet_address = "0x7d3E2922b7333efeA1570c0DFd279e1f628c80E9";
const aaveAddress = "0xF738fEa4792Ad244483336e7f043fD3C76060412";
const daiAddress = "0xc153955295C3FaEF9814081cD9d3c9BF79e89BC3";
const linkAddress = "0x0429AeAb561d1e8B235144e32F70eF3A51075f7F";
//proxy pool address
const poolAddress = "0xDd823E5d36cBB2f79a7857ba6E0f73Db0f335265";
const poolProvider = "0x4b930b87fAF4f6a1d9c5c0Af546cBFd89E34D9a9";
require("dotenv").config();
PRIVATE_KEY = process.env.PRIVATE_KEY;
RPC_URL = process.env.RPC_URL;
const artifacts = {
  Faucet: require("../artifacts/contracts/periphery/mocks/testnet-helpers/Faucet.sol/Faucet.json"),
  TestnetERC20: require("../artifacts/contracts/periphery/mocks/testnet-helpers/TestnetERC20.sol/TestnetERC20.json"),
  poolProvider: require("../artifacts/contracts/core-v3/protocol/configuration/PoolAddressesProvider.sol/PoolAddressesProvider.json"),
  pool: require("../artifacts/contracts/core-v3/protocol/pool/Pool.sol/Pool.json"),
};

const { Contract, ethers } = require("ethers");

//const provider = ethers.provider;
const ownerPrivateKey = PRIVATE_KEY;
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const owner = new ethers.Wallet(PRIVATE_KEY, provider);

const faucetContract = new Contract(
  faucet_address,
  artifacts.Faucet.abi,
  owner
);
const linkContract = new Contract(
  linkAddress,
  artifacts.TestnetERC20.abi,
  owner
);
const pool = new Contract(poolAddress, artifacts.pool.abi, owner);

async function main() {
  try {
    const approveTx = await linkContract.approve(
      poolAddress,
      ethers.utils.parseEther("100"),
      { gasLimit: "500000" }
    );
    console.log(`Approve Transaction Hash: ${approveTx.hash}`);
    const approveReceipt = await approveTx.wait();
    if (approveReceipt.status !== 1) {
      throw new Error(`Approve transaction failed: ${approveTx.hash}`);
    }
    console.log("Approve transaction successful.");

    const supplyTx = await pool.supply(
      linkAddress,
      ethers.utils.parseEther("10"),
      owner.address,
      0,
      { gasLimit: "500000" }
    );
    console.log(`Supply Transaction Hash: ${supplyTx.hash}`);
    const supplyReceipt = await supplyTx.wait();
    if (supplyReceipt.status !== 1) {
      throw new Error(`Supply transaction failed: ${supplyTx.hash}`);
    }
    console.log("Supply transaction successful.");

    const withdrawTx = await pool.withdraw(
      linkAddress,
      ethers.utils.parseEther("10"),
      owner.address,
      { gasLimit: "500000" }
    );
    console.log(`Withdraw Transaction Hash: ${withdrawTx.hash}`);
    const withdrawReceipt = await withdrawTx.wait();
    if (withdrawReceipt.status !== 1) {
      throw new Error(`Withdraw transaction failed: ${withdrawTx.hash}`);
    }
    console.log("Withdraw transaction successful.");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
