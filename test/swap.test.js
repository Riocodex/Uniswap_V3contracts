const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("SwapExamples", function(){
    it("swapExactInputSingle", async function () {
        const SwapExamples = await ethers.getContractFactory("SwapExamples")
        const swapExamples = await SwapExamples.deploy()
        await swapExamples.deployed()
    })
})