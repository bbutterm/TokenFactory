// React App
import { useState, useEffect } from "react";
import tokenContract from "../data/newToken";
import provider from "../walletProvider";
import Clue from "./Clue";
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
  const [stakePercentInput, setStakePercentInput] = useState(0);
  const [stakeTermInput, setStakeTermInput] = useState(0);
  const [stakeMinInput, setStakeMinInput] = useState();

  // Connect to wallet
  useEffect(() => {
    async function connect() {
      const signer = await provider.getSigner();
      setWallet(signer);
    }
    connect();
  }, []);

  // Connect to token contract
  useEffect(() => {
    async function connect() {
      setName(await tokenContract.name());
    }
    connect();
  }, [wallet]);

  //GET CONTRACT INFO

  // Get token balance
  useEffect(() => {
    async function getBalance() {
      let balance = await tokenContract.balanceOf(
        await tokenContract.getAddress()
      );
      balance = balance.toString();
      setTokenBalance(balance);
    }
    async function getTotalSupply() {
      const count = await tokenContract.totalSupply();
      console.log(count.toString());
      setTotalSupply(count.toString());
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
  };
  const handleCheckState = async (e) => {
    let status = await tokenContract.checkStake();
    setStakeStatus(status.toString());
  };
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
  };
  const handleSetTermInput = async (e) => {
    e.preventDefault();
    await tokenContract.stakeTermSet(stakeTermInput);
  };
  const handleSetMinInput = async (e) => {
    e.preventDefault();
    await tokenContract.stakeMinSet(stakeMinInput);
  };
  // Get payment
  const getPayment = async () => {
    const checkStake = await tokenContract.checkStake();
    if (checkStake) {
      await tokenContract.getPayment();
    }
  };
  function handleChangePolz(e) {
    setPolz(e.target.value);
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">
      <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-1/2 backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
        <h1 className="font-bold flex mb-5 text-[30px]">Account INFO</h1>

        <div className="flex w-9/12 flex-col">
          <h3 className="font-bold flex text-[15px]">Token Name :{name} </h3>
          <h3 className="font-bold flex text-[15px]">
            Total supply :{totalSupply}
          </h3>
          <h3 className="font-bold flex text-[15px]">
            Account Balance: {tokenBalance}
          </h3>
        </div>

        <h1 className="flex font-bold text-[20px]">
          Stake Settings(onlyowner)
        </h1>

        <div className="flex w-9/12 flex-col">
          <form className="flex flex-col" onSubmit={handleSetTermInput}>
            <h4>Stake Term</h4>
            <div className="flex items-center">
              <input
                className="w-9  text-center rounded-xl"
                label="Stake Term"
                value={stakeTermInput}
                onChange={(e) => setStakeTermInput(e.target.value)}
              />
              <br />
              <input
                type="range"
                max="50"
                className=" appearance-none h-2 rounded-xl   bg-blue "
                value={stakeTermInput}
                onChange={(e) => setStakeTermInput(e.target.value)}
              />
              <Button buttonStyle="light" type="button" text="Set" />
            </div>
          </form>

          <h4>Stake Percent</h4>
          <form className="flex flex-col " onSubmit={handleSetPercentInput}>
            <div className="flex items-center ">
              <input
                className="w-9 text-center rounded-xl"
                value={stakePercentInput}
                onChange={(e) => setStakePercentInput(e.target.value)}
              />
              <input
                type="range"
                max="50"
                className="bg-blue flex text-blue"
                value={stakePercentInput}
                onChange={(e) => setStakePercentInput(e.target.value)}
              />
              <Button buttonStyle="light" type="button" text="Set" />
            </div>
          </form>

          <form onSubmit={handleSetMinInput}>
            <h4>Stake Minimal Count</h4>
            <div className="flex items-center ">
              <input
                className="border rounded-l-xl p-1 text-center"
                label="Stake Min"
                value={stakeMinInput}
                onChange={(e) => setStakeMinInput(e.target.value)}
              />
              <button className="border w-10 bg-light-green p-1 rounded-r-xl">
                Set
              </button>
            </div>
          </form>

          <h1 className="flex justify-center text-[20px] font-bold">
            Stake Tokens
          </h1>
          <div className="flex w-9/12 flex-col">
            <h4 className="font-bold flex text-[15px]">
              Current Term: {stakeTerm} seconds
            </h4>
            <h4 className="font-bold flex text-[15px]">
              Current Percent : {stakePercent} %
            </h4>
            <h4 className="font-bold flex text-[15px]">
              Current Min Stake: {stakeMin} coins
            </h4>
            <Clue
              text={`You will get ${
                currentValue * (stakePercent / 100)
              } tokens, if stake current value for ${stakeTerm} minutes`}
            >
              &#9773;
            </Clue>
            <form onSubmit={stakeCoins}>
              {/* <h3>You will get {currentValue * (stakePercent / 100)} tokens, if stake current value for {stakeTerm} minutes</h3> */}

              <input
                className="border rounded-l-xl text-center p-1"
                onChange={handleCurrentValue}
                label={currentValue}
              ></input>
              <button className="border  bg-light-green rounded-r-xl p-1">
                Stake
              </button>
            </form>
          </div>

          <div className ="flex flex-col m-1">

          <h1 className=" font-bold text-[20px] text-center">
            Payment Menu
          </h1>
      
           <div className = "flex flex-row">
              <Button
                buttonStyle="light"
                type="button"
                text="Check stake status"
                onClick={handleCheckState}
              />
              <status className="ml-6">
                {stakeStatus ? (
                  <p >&#10004;</p>
                ) : (
                  <p >&#10008;</p>
                )}
              </status>
           
              </div>
            <Button
              buttonStyle="casual"
              type="button"
              text="Get Payment"
              onClick={getPayment}
            />
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewToken;
