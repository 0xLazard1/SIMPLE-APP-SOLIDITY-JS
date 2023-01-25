const { ethers } = require("hardhat")
const { expect } = require("chai");

describe('Vercel', function () {

  beforeEach(async function () {

    Vercel1 = await ethers.getContractFactory('Vercel');
    this.VercelDeployed = await Vercel1.deploy();
  });

  describe('Number equal 0', function () {

    it("Should that Number equal a 0", async function () {
      expect(await this.VercelDeployed.Number()).to.equal(0);
    })
  })

  describe('ChangeStepNumber', function () {
    it("Should new number equal a 1", async function () {
      await this.VercelDeployed.setNumber(1)
      expect(await this.VercelDeployed.Number()).to.equal(1)
    })
  })

  describe('New getNumber', function () {
    it('Should newGetNumber', async function () {
      await this.VercelDeployed.setNumber(2);
      expect(await this.VercelDeployed.GetNumber()).to.equal(2)
    })
  })

})
