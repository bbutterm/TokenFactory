const { expect } = require("chai");
const { ethers } = require("hardhat");
const { extendConfig } = require('hardhat/config');

describe("TokenFactory", function () {
    let acc1;
    let acc2;
    let payments;

    beforeEach(async function () {
        acc1 = await ethers.getSigners();
        const Factory = await ethers.getContractFactory("TokenFactory", acc1);
        payments = await Factory.deploy()
        await payments.deployed();
        console.log(payments.address)
    })

    it("should be deployed", async function () {
        console.log("success");
    })

    it("Token created!", async function () {
        token = await payments.createNewToken("TestToken", "TT", 100, 1000);
        console.log("token created", token.to)
    })
})


describe("NewToken", function () {
    let owner, acc1, acc2;
    let token;

    function sleep(millis) {
        var t = (new Date()).getTime();
        var i = 0;
        while (((new Date()).getTime() - t) < millis) {
            i++;
        }
    }

    beforeEach(async function () {
        [owner, acc1, acc2] = await ethers.getSigners();
        const Factory = await ethers.getContractFactory("NewToken", owner);
        token = await Factory.deploy("TestToken", "TT", 1000, 1000);
        await token.deployed();
        console.log(token.address);
    })

    it("Contract deployed", async function () {
        expect(token.address).to.be.properAddress;
    })

    it("Get some variables", async function () {
        console.log("getName", await token.name())
        let supply = (await token.totalSupply()).toString()
        console.log("getTotalSupply", supply)
        console.log("getOwner", await token.owner())
    })
    it("Transfer tokens", async function () {
        let start = token.balanceOf(acc1.address);
        const tx = await token.transfer(acc1.address, 300);
        tx.wait()
        let balance = (await token.balanceOf(acc1.address)).toString()
        console.log(balance);
        expect(await start != balance);
    })

    it("Owner can change stake parametrs", async function () {
        const value = await token.stakePercent();
        const tx = await token.stakePercentSet(10);
        tx.wait();
        console.log(value.toString());
        expect(await token.stakePercent != value);
    })

    it("user stake tokens, and then take them out", async function () {
        let balanceBeforeStake = 300;
        const tx = await token.transfer(acc1.address, balanceBeforeStake);
        tx.wait()
        const tx_stake = await token.connect(acc1).stakeCoins(100);
        tx_stake.wait();
        let balance = ethers.utils.formatEther(await token.balanceOf(acc1.address)) * 10 ** 18;
        console.log("Now balance is", balance);
        console.log("waiting for stake!");
        sleep(6000);
        const tx_withdraw = await token.connect(acc1).getPayment();
        tx_withdraw.wait();
        balance = ethers.utils.formatEther(await token.balanceOf(acc1.address)) * 10 ** 18;
        console.log("Now balance is", balance);
        expect(token.balanceOf(acc1.address) > balanceBeforeStake);
    })


})