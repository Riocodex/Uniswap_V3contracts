const { expect } = require("chai")
const { ethers } = require("hardhat")

const DAI ="0x6B175474E89094C44Da98b954EedeAC495271d0F";



describe("SwapExamples", () => {
 
  let accounts
  let whale
  let dai


  before(async () => {
    accounts = await ethers.getSigners(1)

    const SwapExamples = await ethers.getContractFactory("SwapExamples")
    swapExamples = await SwapExamples.deploy()
    await swapExamples.deployed()

    weth = await ethers.getContractAt("IWETH", WETH9)
    dai = await ethers.getContractAt("IERC20", DAI)
    usdc = await ethers.getContractAt("IERC20", USDC)
  })

  it("swapExactInputSingle", async () => {
    const amountIn = 10n ** 18n

    // Deposit WETH
    await weth.deposit({ value: amountIn })
    await weth.approve(swapExamples.address, amountIn)

    // Swap
    await swapExamples.swapExactInputSingle(amountIn)

    console.log("DAI balance", await dai.balanceOf(accounts[0].address))
  })

  it("swapExactOutputSingle", async () => {
    const wethAmountInMax = 10n ** 18n
    const daiAmountOut = 100n * 10n ** 18n

    // Deposit WETH
    await weth.deposit({ value: wethAmountInMax })
    await weth.approve(swapExamples.address, wethAmountInMax)

    // Swap
    await swapExamples.swapExactOutputSingle(daiAmountOut,wethAmountInMax)

    console.log("DAI balance", await dai.balanceOf(accounts[0].address))
  })

  
  it("swapExactInputMultihop", async () => {
    const amountIn = 10n ** 18n

    // Deposit WETH
    await weth.deposit({ value: amountIn })
    await weth.approve(swapExamples.address, amountIn)

    // Swap
    await swapExamples.swapExactInputMultihop(amountIn)

    console.log("DAI balance", await dai.balanceOf(accounts[0].address))
    console.log("WETH balance", await weth.balanceOf(accounts[0].address))
   
  })

  it("swapExactOutputMultihop", async () => {
    const wethAmountInMax = 10n ** 18n
    const daiAmountOut = 100n * 10n ** 18n

    // Deposit WETH
    await weth.deposit({ value: wethAmountInMax })
    await weth.approve(swapExamples.address, wethAmountInMax)

    // Swap
    await swapExamples.swapExactOutputMultihop(daiAmountOut,wethAmountInMax)

    console.log("DAI balance", await dai.balanceOf(accounts[0].address))
    console.log("WETH balance", await weth.balanceOf(accounts[0].address))
  })

})