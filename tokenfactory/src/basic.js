// React App
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { Button, Input } from '@skbkontur/react-ui';
import abi from "./abi.json"
const NewToken = () => {
    const [stakePercent, setStakePercent] = useState(0);
    const [stakeTerm, setStakeTerm] = useState(0);
    const [stakeMin, setStakeMin] = useState(0);
    const [wallet, setWallet] = useState(null);
    const [tokenContract, setTokenContract] = useState(null);
    const [tokenBalance, setTokenBalance] = useState(0);

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
        }
        connect();

    }, [wallet]);

    // Get token balance
    useEffect(() => {
        async function getBalance() {
            const balance = await tokenContract.balanceOf(wallet.address);
            setTokenBalance(balance);
        }
        async function getTotalCount() {
            const count = await tokenContract.totalSupply();
        }
        if (tokenContract) {
            getBalance();
        }
    }, [tokenContract]);

    // Stake settings
    const stakePercentSet = async e => {
        const stakePercent = e.target.value;
        await tokenContract.stakePercentSet(stakePercent);
        setStakePercent(stakePercent);
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

        console.log(tokenContract)
    }

    return (
        <div>
            <h1>Account INFO</h1>
            <h3>Token Name : { }</h3>
            <h3>Total supply :{ }</h3>
            <h3>Account Balance: {tokenBalance}</h3>
            <h1>Stake Settings(onlyowner)</h1>
            <input
                label="Stake Percent"
                value={stakePercent}></input>
            <button onClick={stakePercentSet}>Set</button>
            <input
                label="Stake Term"
                value={stakeTerm}
                onChange={stakeTermSet}></input>
            <button>Set</button>
            <input
                label="Stake Min"
                value={stakeMin}
                onChange={stakeMinSet}></input>
            <button>Set</button>

            <h1>Stake Tokens</h1>
            <h4>Current Term:{ }</h4>
            <h4>Current Percent :{ }</h4>
            <h4>Current Min Stake:{ }</h4>
            <h3>You will get {"x"} tokens, if stake current value for {"y"} term</h3>
            <input label="Amount"></input>
            <button onClick={stakeCoins}>Stake</button>

            <h1>Payment Menu</h1>
            <button onClick={""}>Check stake status</button>
            <status>{"done"}</status>
            <br></br>
            <button onClick={getPayment}>Get Payment</button>
            <button onClick={test}>Test</button>
        </div>
    );
};

export default NewToken;