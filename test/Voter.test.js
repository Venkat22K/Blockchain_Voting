const { expect } = require("chai");
const { ethers } = require("hardhat");

console.log("Test file is being executed!");

describe("Voter Contract", function (){
  console.log("Test file is being executed!");

  let voter, voter_v;

  before(async function () {
    console.log("Test file is being executed!");

    voter = await ethers.getContractFactory("voter");
    voter_v = await voter.deploy(["monkey","donkey"]);
    await voter_v.deployed();

    console.log("voter deployed to:", voter_v.address);
  });

  it("Should vote once", async function () {
    const value = 1;
    const tx = await voter_v.vote(value);
    await tx.wait();
});

it("Should return winner", async function () {
    
    const winner = await voter_v.getWinner();
    console.log("Winner:", winner);
   
});

});
