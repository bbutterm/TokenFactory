// React App
import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import abi from "./abi.json"

const NewToken = () => {
    const [stakePercent, setStakePercent] = useState(0);
    const [stakeTerm, setStakeTerm] = useState(0);
    const [stakeMin, setStakeMin] = useState(0);
    const [wallet, setWallet] = useState(null);
    const [tokenContract, setTokenContract] = useState(null);
    const [tokenBalance, setTokenBalance] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [name, setName] = useState();
    const [stakeStatus, setStakeStatus] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);

    const handleCurrentValue = (e) => {
        setCurrentValue(e.target.value)
    }
    // Connect to wallet
    useEffect(() => {
        async function connect() {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            setWallet(signer);
        }
        connect()
    }, []);

    // Connect to token contract
    useEffect(() => {
        async function connect() {
            const tokenContract = new ethers.Contract(
                '0x8adE23ABb0d65A1a60c64a4238F91f20f0a14daF', // contract address
                abi, // contract abi
                wallet
            );
            setTokenContract(tokenContract);
            setName(await tokenContract.name())
        }
        connect();

    }, [wallet]);

    // Get token balance
    useEffect(() => {
        async function getBalance() {
            let balance = await tokenContract.balanceOf(await wallet.getAddress());
            balance = balance.toString()
            setTokenBalance(balance);
        }
        async function getTotalSupply() {
            const count = await tokenContract.totalSupply();
            console.log(count.toString())
            setTotalSupply(count.toString())
        }
        async function getStakeInfo() {
            let percent = await tokenContract.stakePercent();
            percent = percent.toString();
            setStakePercent(percent);
            let term = await tokenContract.stakeTerm();
            term = term.toString();
            setStakeTerm(term);
            let min = await tokenContract.stakeMin();
            min = min.toString();
            setStakeMin(min);
        }
        if (tokenContract) {
            getBalance();
            getTotalSupply();
            getStakeInfo();
            console.log(tokenBalance);
        }
    }, [tokenContract]);


    //handlers (to be refactored)

    const handleCheckState = async () => {
        let status = await tokenContract.checkStake()
        status = status.toString();
        setStakeStatus(status);
    }
    // Stake settings
    const stakePercentSet = async e => {
        await tokenContract.stakePercentSet(stakePercent);
    };

    const stakeTermSet = async e => {
        const stakeTerm = e.target.value;
        await tokenContract.stakeTermSet(stakeTerm);
        setStakeTerm(stakeTerm);
    };

    const stakeMinSet = async e => {
        const stakeMin = e.target.value;
        await tokenContract.stakeMinSet(stakeMin);
        setStakeMin(stakeMin);
    };

    // Stake tokens
    const stakeCoins = async e => {
        const amount = e.target.value;
        await tokenContract.stakeCoins(amount);
    };

    // Get payment
    const getPayment = async () => {
        const checkStake = await tokenContract.checkStake();
        if (checkStake) {
            await tokenContract.getPayment();
        }
    };
    const test = async () => {
        console.log(await wallet.getAddress())
    }

    return (
        <div>
            <h1>Account INFO</h1>
            <h3>Token Name : {name}</h3>
            <h3>Total supply :{totalSupply}</h3>
            <h3>Account Balance: {tokenBalance}</h3>
            <h1>Stake Settings(onlyowner)</h1>
            <input
                label="Stake Percent"
                value={stakePercent}
                onChange={""}></input>
            <button onClick={stakePercentSet}>Set</button>
            <input
                label="Stake Term"
                value={stakeTerm}></input>
            <button onClick={stakePercentSet}>Set</button>
            <input
                label="Stake Min"
                value={stakeMin}
            ></input>
            <button onClick={stakePercentSet}>Set</button>

            <h1>Stake Tokens</h1>
            <h4>Current Term:{stakeTerm} seconds</h4>
            <h4>Current Percent :{stakePercent} %</h4>
            <h4>Current Min Stake:{stakeMin} coins</h4>
            <h3>You will get {currentValue * (stakePercent / 100)} tokens, if stake current value for {stakeTerm} minutes</h3>
            <input onChange={handleCurrentValue} label={currentValue}></input>
            <button onClick={stakeCoins}>Stake</button>

            <h1>Payment Menu</h1>
            <button onClick={handleCheckState}>Check stake status</button>
            <status>{stakeStatus}</status>
            <br></br>
            <button onClick={getPayment}>Get Payment</button>
            <button onClick={test}>Test</button>
        </div>
    );
};

export default NewToken;