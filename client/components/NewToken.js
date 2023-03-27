// React App
import { useState, useEffect } from "react";
import walletProvider from "../walletProvider";
import Clue from "./Clue";
import Button from "../components/comp/button";
import abi from "../data/newToken";
import { Contract, formatEther } from "ethers";
import { useRouter } from "next/router";

const NewToken = () => {
  //CONNECT

  const [wallet, setWallet] = useState();
  const [tokenInfo, setTokenInfo] = useState();
  const [stakePercent, setStakePercent] = useState(0);
  const [stakeTerm, setStakeTerm] = useState(0);
  const [stakeMin, setStakeMin] = useState(0);
  const [stakeStatus, setStakeStatus] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);
  const [stakePercentInput, setStakePercentInput] = useState(0);
  const [stakeTermInput, setStakeTermInput] = useState(0);
  const [stakeMinInput, setStakeMinInput] = useState();
  const [ownerAddress, setOwnerAddress] = useState('');
  const router = useRouter();
  const { item } = router.query;

  const tokensContract = new Contract(item, abi, walletProvider);
  console.log(tokensContract);

  // Connect to wallet
  useEffect(() => {
    async function connect() {
      const signer = await walletProvider.getSigner();
      setWallet(signer);
      setOwnerAddress(signer.address)
    }
    connect();
  }, []);
const tokensContractWithSigner = (item, abi, wallet)
  // Connect to token contract
  useEffect(() => {
    try {
      (async () => {
        let token = {
          name: await tokensContract.name(),
          balance: await tokensContract.balanceOf(item),
          count: await tokensContract.totalSupply(),
          percent: await tokensContract.stakePercent(),
          term: await tokensContract.stakeTerm(),
          min: await tokensContract.stakeMin(),
          status: await tokensContract.checkStake(),
        };
        setTokenInfo(token);
      })();
    } catch (err) {
      console.error(err);
    }
  }, [wallet]);
  console.log(tokenInfo);
  console.log(ownerAddress);
  

    //Stake functions

  //handlers (to be refactored)
  const handleCurrentValue = (e) => {
    setCurrentValue(e.target.value);
  };
  const handleChangeMinInput = (e) => {
    if(stakeMinInput>(Number(tokenInfo.balance))){
     alert ("Enter less amount ")
    }
 setStakeMinInput(e.target.value)
  }
  /* global BigInt */
  // Stake tokens
  const stakeCoins = async (e) => {
    e.preventDefault();
    const amount = BigInt(currentValue);
    console.log(amount);
    await tokensContract.stakeCoins(amount);
  };
  //Stake Settings
  const handleChangeStakeTermInput = (e) => {
    e.preventDefault();
  setStakeTermInput(e.target.value)
  }

  const handleSetPercentInput = async (e) => {
    e.preventDefault();    
     try {
     await tokensContractWithSigner.stakePercentSet(stakePercentInput)
      } catch (error) {
      console.error(error);
    }
  };

  const handleSetTermInput = async (e) => {
    e.preventDefault();
    await tokensContract.stakeTermSet(stakeTermInput);
  };
  const handleSetMinInput = async (e) => {
    e.preventDefault();
    await tokensContract.stakeMinSet(stakeMinInput);
  };
  // Get payment
  const getPayment = async () => {
    const checkStake = await tokensContract.checkStake();
    if (checkStake) {
      await tokensContract.getPayment();
    }
  };
  function handleChangePolz(e) {
    setPolz(e.target.value);
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">
        <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-1/2 backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
          <h1 className="font-bold flex mb-5 text-[30px]">Account INFO</h1>

          <div className="flex w-9/12 flex-col font-bold text-[15px]">
            {!tokenInfo ? (
              ""
            ) : (
              <div>
                <h3>Token Name: {tokenInfo.name}</h3>
                <h3>Total supply: {formatEther(tokenInfo.count)}</h3>
                <h3>Account Balance: {formatEther(tokenInfo.balance)}</h3>
              </div>
            )}
          </div>

          <h1 className="flex font-bold text-[20px]">
            Stake Settings(onlyowner)
          </h1>

          <div className="flex w-9/12 flex-col">
            <form className="flex flex-col" >
              <h4>Stake Term</h4>
              <div className="flex items-center">
                <input
                  className="w-9  text-center rounded-xl"
                  label="Stake Term"
                  value={stakeTermInput}
                  onChange={handleChangeStakeTermInput}
                />
                <br />
                <input
                  type="range"
                  max="50"
                  className=" appearance-none h-2 rounded-xl   bg-blue "
                  value={stakeTermInput}
                  onChange={handleChangeStakeTermInput}
                />
                <Button buttonStyle="light" type="button" text="Set Term"
                onClick = {handleSetTermInput} />
              </div>
            </form>

            <h4>Stake Percent</h4>
            <form className="flex flex-col ">
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
                <Button buttonStyle="light" type="button" text="Set Percent"
                onClick = {handleSetPercentInput} />
              </div>
            </form>

            <form onSubmit={handleSetMinInput}>
              <h4>Stake Minimal Count</h4>
              <div className="flex items-center ">
                <input
                  className="border rounded-l-xl p-1 text-center"
                  label="Stake Min"
                  value={stakeMinInput}
                  onChange={handleChangeMinInput}
                />
                <button className="border  bg-light-green p-1 rounded-r-xl">
                  Set Count
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
              <div className=" flex flex-row">
                <Clue
                  text={`You will get ${
                    currentValue * (stakePercent / 100)
                  } tokens, if stake current value for ${stakeTerm} minutes`}
                >
                  &#9773;
                </Clue>
              </div>
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

            <div className="flex flex-col m-1">
              <h1 className=" font-bold text-[20px] text-center">
                Payment Menu
              </h1>

              <div className="flex flex-row">
                <Button
                  buttonStyle="light"
                  type="button"
                  text="Check stake status"
                />
                <status className="ml-6">
                  {stakeStatus ? <p>&#10004;</p> : <p>&#10008;</p>}
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
    </>
  );
};

export default NewToken;
