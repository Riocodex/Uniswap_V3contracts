const { expect } = require("chai")
const { ethers } = require("hardhat")

const DAI ="0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9 ="0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC ="0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";


describe("SwapExamples", function(){
    it("swapExactInputSingle", async function () {
        const accounts = await ethers.getSigners()

        const SwapExamples = await ethers.getContractFactory("SwapExamples")
        const swapExamples = await SwapExamples.deploy()
        await swapExamples.deployed()
    })
})