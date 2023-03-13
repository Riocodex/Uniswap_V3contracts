const { expect } = require("chai")
const { ethers, network } = require("hardhat")

const DAI ="0x6B175474E89094C44Da98b954EedeAC495271d0F";
const DAI_WHALE="0xF977814e90dA44bFA03b6295A0616a897441aceC"


describe("SwapExamples", () => {
 
  let accounts
  let whale
  let dai


  before(async () => {
    accounts = await ethers.getSigners()

    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [DAI_WHALE],
    })

    dai = await ethers.getContractAt("IERC20", DAI)
    whale = await ethers.getSigner(DAI_WHALE)
  })

    it("unlocks account", async() => {
        const amount = 100n * 10n ** 18n

        console.log("DAI balance of whale",await dai.balanceOf(whale.address))
        expect(await dai.balanceOf(whale.address)).to.gte(amount)

        await dai.connect(whale.transfer(accounts[0].address, amount))

        console.log("DAI balance of whale",await dai.balanceOf(accounts[0].address))
        
    })
  

})