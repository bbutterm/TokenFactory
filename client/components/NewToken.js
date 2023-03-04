// React App
import { useState, useEffect } from 'react';
import tokenContract from "../data/newToken";
import provider from "../walletProvider"
import Button from "../components/comp/button";

const NewToken = () => {
    
    //CONNECT

    const [wallet, setWallet] = useState();
    const [name, setName] = useState();
    const [tokenBalance, setTokenBalance] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [stakePercent, setStakePercent] = useState(0);
    const [stakeTerm, setStakeTerm] = useState(0);
    const [stakeMin, setStakeMin] = useState(0);
    const [stakeStatus, setStakeStatus] = useState(false);
    const [currentValue, setCurrentValue] = useState(0);
    const [stakePercentInput, setStakePercentInput] = useState();
    const [stakeTermInput, setStakeTermInput] = useState();
    const [stakeMinInput, setStakeMinInput] = useState();

    // Connect to wallet
    useEffect(() => {
        async function connect() {            
            const signer = await provider.getSigner();
            setWallet(signer);
        }
        connect()
    }, []);

    // Connect to token contract
    useEffect(() => {
        async function connect() {
     setName(await tokenContract.name())
        }
        connect();

    }, [wallet]);

    //GET CONTRACT INFO
   
    // Get token balance
    useEffect(() => {
        async function getBalance() {
            let balance = await tokenContract.balanceOf(await tokenContract.getAddress());
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
    });


    //Stake functions 
  
    //handlers (to be refactored)
    const handleCurrentValue = (e) => {
        setCurrentValue(e.target.value);
    }
    const handleCheckState = async (e) => {
        let status = await tokenContract.checkStake()
        setStakeStatus(status.toString())
    }
    /* global BigInt */
    // Stake tokens
    const stakeCoins = async (e) => {
        e.preventDefault();
        const amount = BigInt(currentValue);
        console.log(amount);
        await tokenContract.stakeCoins(amount);
    };
    //Stake Settings  

    const handleSetPercentInput = async (e) => {
        e.preventDefault();
        await tokenContract.stakePercentSet(stakePercentInput);
    }
    const handleSetTermInput = async (e) => {
        e.preventDefault();
        await tokenContract.stakeTermSet(stakeTermInput);
    }
    const handleSetMinInput = async (e) => {
        e.preventDefault();
        await tokenContract.stakeMinSet(stakeMinInput);
    }
    // Get payment
    const getPayment = async () => {
        const checkStake = await tokenContract.checkStake();
        if (checkStake) {
            await tokenContract.getPayment();
        }
    };

    return (
        <div className = 'font-Space'>
            <h1>Account INFO</h1>
            <h3>Token Name : {name}</h3>
            <h3>Total supply :{totalSupply}</h3>
            <h3>Account Balance: {tokenBalance}</h3>
            <h1>Stake Settings(onlyowner)</h1>
            <h4>Stake Term</h4>
            <form onSubmit={handleSetTermInput}>
                <input
                    label="Stake Term"
                    value={stakeTermInput}
                    onChange={(e) => setStakeTermInput(e.target.value)} />
                <button>Set</button>
            </form>
            <h4>Stake Percent</h4>
            <form onSubmit={handleSetPercentInput}>
                <input
                    value={stakePercentInput}
                    onChange={(e) => setStakePercentInput(e.target.value)} />
                <button>Set</button>
            </form>
            <h4>Stake Minimal Count</h4>
            <form onSubmit={handleSetMinInput}>
                <input
                    label="Stake Min"
                    value={stakeMinInput}
                    onChange={(e) => setStakeMinInput(e.target.value)} />
                <button>Set</button>
            </form>
            <h1>Stake Tokens</h1>
            <h4>Current Term:{stakeTerm} seconds</h4>
            <h4>Current Percent :{stakePercent} %</h4>
            <h4>Current Min Stake:{stakeMin} coins</h4>
            <h3>You will get {currentValue * (stakePercent / 100)} tokens, if stake current value for {stakeTerm} minutes</h3>
            <form onSubmit={stakeCoins}>
                <input onChange={handleCurrentValue} label={currentValue}></input>
                <button >Stake</button>
            </form>
            <h1>Payment Menu</h1>
            <Button
            buttonStyle ='connect'
            type = 'button' 
            text = 'Check stake status'
            onClick={handleCheckState}></Button>
            <status>{stakeStatus}</status>
            <br></br>
            <button onClick={getPayment}>Get Payment</button>
        </div>
    );
};

export default NewToken;