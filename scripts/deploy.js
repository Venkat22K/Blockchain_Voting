// IMport Hardhat runtime environment
const hre = require("hardhat");

async function main(){
    // 1. Get ContractFactory fo rthe contract
    const voter = await hre.ethers.getContractFactory("voter");

    // 2. Deploy teh contract
    const voter_v = await voter.deploy(["monkey","donkey"]);

    // 3. Wait for the deployment to be mined
    await voter_v.deployed();

    console.log("votere deployed to:", voter_v.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});