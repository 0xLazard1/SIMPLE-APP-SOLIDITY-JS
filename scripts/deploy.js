const hre = require("hardhat");

async function main() {


  const Vercel = await hre.ethers.getContractFactory("Vercel");
  const vercel = await Vercel.deploy();

  await vercel.deployed();

  console.log(
    `Lock with 1 ETH and unlock timestamp deployed to ${vercel.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
