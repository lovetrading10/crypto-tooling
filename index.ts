const ethers = require("ethers");
const keccak = require("keccak");
const secp256k1 = require("secp256k1");

import { mLootAbi } from "./mLoot.abi.js";

const mLootAddress = "0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF";
const rpc = new ethers.providers.JsonRpcProvider("https://eth-mainnet.alchemyapi.io/v2/neYTaFbwbv1nQRGbyO4WHQVy2Po50uRO");
// const rpc = new ethers.getDefaultProvider(); // use for default ether.js provider
const mLoot = new ethers.Contract(mLootAddress, mLootAbi, rpc);

(async () => {
  try {
    //   const { address, privateKey } = generateWallet();
    //   console.log("Checking wallet: ", address);

    const allPromises = [];

    const max = 1316005;

    for (let i = 8001; i < 8100; i++) {
      allPromises.push(mLoot.ownerOf(i));
    }

    const totalAddresses = await Promise.all(allPromises);

    console.log(totalAddresses);
  } catch (err) {
    console.log(err);
  }
})();

// const generateWallet = () => {
//   const privateKeyBytes = crypto.randomBytes(32);
//   const pub = secp256k1.publicKeyCreate(privateKeyBytes, false).slice(1);
//   const address = keccak("keccak256").update(pub).digest().slice(-20).toString("hex");

//   return {
//     address,
//     privateKey: privateKeyBytes.toString("hex"),
//   };
// };
