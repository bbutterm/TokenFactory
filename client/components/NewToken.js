// React App
import { useState, useEffect } from 'react';
import tokenContract from "../data/newToken";
import provider from "../walletProvider"
import Clue from "./Clue"

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
    const [stakePercentInput, setStakePercentInput] = useState(0);
    const [stakeTermInput, setStakeTermInput] = useState(0);
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
    function handleChangePolz(e){
        setPolz(e.target.value)
    }

    return (
        <div className='h-full  font-Space flex items-center w-full'>
        <div className='flex flex-col border shadow-xl items-center ml-10 rounded-xl h-4/5 w-1/2'>  
        <h1 className='font-bold flex justify-center mb-5 text-[30px]'>Account INFO</h1>
        <div className='flex w-9/12 flex-col'>
            <h3 className='font-bold flex text-[15px]'>Token Name :{name} </h3>
            <h3 className='font-bold flex text-[15px]' >Total supply :{totalSupply}</h3>
            <h3 className='font-bold flex text-[15px]' >Account Balance: {tokenBalance}</h3>
        </div>
            <h1 className='flex justify-center font-bold text-[20px]'>Stake Settings(onlyowner)</h1> 
            <div className='flex w-9/12 flex-col'>
            <form className='flex flex-col' onSubmit={handleSetTermInput}>
               <h4>Stake Term</h4> 
               <div className='flex items-center'>
                <input
                className='w-9 rounded-xl'
                    label="Stake Term"
                    value={stakeTermInput}
                    onChange={(e) => setStakeTermInput(e.target.value)} /><br/>
                    <input type="range" max="50" className=' appearance-none h-2 rounded-xl   bg-blue '  value={stakeTermInput} onChange={(e) => setStakeTermInput(e.target.value)} />
                <button className='border bg-light-green mb-1 rounded-lg ml-5'>Set</button>
                </div>
            </form>
            <h4>Stake Percent</h4>
            <form className='flex flex-col' onSubmit={handleSetPercentInput}>
            <div className='flex items-center'>
                <input
                    className='w-9 rounded-xl'
                    value={stakePercentInput}
                    onChange={(e) => setStakePercentInput(e.target.value)} />
                    <input type="range" max="50" className='bg-blue flex text-blue'  value={stakePercentInput} onChange={(e) => setStakePercentInput(e.target.value)} />
                    <button className='border mb-1 bg-light-green  rounded-lg ml-5'>Set</button>
                </div>
            </form>
            
            <form  onSubmit={handleSetMinInput}>
                <h4>Stake Minimal Count</h4>
                <div className='flex'>
                <input
                className='border rounded-l-xl'
                    label="Stake Min"
                    value={stakeMinInput}
                    onChange={(e) => setStakeMinInput(e.target.value)} />
                <button className='border w-10 bg-light-green rounded-r-xl'>Set</button>
                </div>
            </form>
           </div>
            <h1 className='flex justify-center text-[20px] font-bold'>Stake Tokens</h1>
            <div className='flex w-9/12 flex-col'>
            <h4 className='font-bold flex text-[15px]' >Current Term: {stakeTerm} seconds</h4>
            <h4 className='font-bold flex text-[15px]' >Current Percent : {stakePercent} %</h4>
            <h4 className='font-bold flex text-[15px]' >Current Min Stake: {stakeMin} coins</h4>
            <Clue  text={`You will get ${currentValue * (stakePercent / 100)} tokens, if stake current value for ${stakeTerm} minutes`}>&#9773;</Clue>
            <form onSubmit={stakeCoins}>
                {/* <h3>You will get {currentValue * (stakePercent / 100)} tokens, if stake current value for {stakeTerm} minutes</h3> */}
                
                <input className='border rounded-l-xl' onChange={handleCurrentValue} label={currentValue}></input>
                <button className='border  bg-light-green rounded-r-xl' >Stake</button>
            </form>
           </div>
            <h1 className='flex justify-center font-bold text-[20px]'>Payment Menu</h1>
            <div className='flex w-9/12 flex-col'>
            <div className='flex mb-5'>
            <button className='border bg-light-green rounded-lg'  onClick={handleCheckState}>Check stake status</button>
            <status>{stakeStatus? (<p className='ml-10' >&#10004;</p>) : (<p className='ml-10'>&#10008;</p>)}</status>
            </div>
            
            <button className='border bg-light-green rounded-lg w-1/4' onClick={getPayment}>Get Payment</button>
            </div>
            </div>
            </div>
    );
};

export default NewToken;