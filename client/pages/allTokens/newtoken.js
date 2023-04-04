// import NewToken from "../components/NewToken"

// function Token(){
//     return(
//     <>
//         <div className="h-screen">
     
//            <NewToken /> 
//         </div>
//         </>  
//     )
// }
// export default Token
// React App
import { useState, useEffect } from "react";
import walletProvider from "../../walletProvider";
import Clue from "../../components/Clue";
import Button from "../../components/comp/button";
import abi from "../../data/newToken";
import { Contract, formatEther } from "ethers";
import { useRouter } from "next/router";
import contractTokenFactory from "../../data/tokenFactory";

const NewToken = ({address}) => {
  //CONNECT

  const [wallet, setWallet] = useState();
  const [tokenInfo, setTokenInfo] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [stakePercentInput, setStakePercentInput] = useState(0);
  const [stakeTermInput, setStakeTermInput] = useState(0);
  const [stakeMinInput, setStakeMinInput] = useState();
  const [ownerAddress, setOwnerAddress] = useState('');

 
  

  const tokensContract = new Contract(address, abi, walletProvider);
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
const tokensContractWithSigner = new Contract(address, abi, wallet)


  // Connect to token contract
  useEffect(() => {
    try {
      (async () => {
        let token = {
          name: await tokensContract.name(),
          balance: await tokensContract.balanceOf(address),
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
;

  

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
    await tokensContractWithSigner.stakeCoins(amount);
  };
  //Stake Settings
  const handleChangeStakeTermInput = (e) => {
    e.preventDefault();
  setStakeTermInput(Number(e.target.value))
  }

  const handleSetPercentInput = async (e) => {
    e.preventDefault();    
     try {
     await tokensContractWithSigner.stakePercentSet(stakePercentInput)
      } catch (error) {
      console.error(error);
    }
  };

  const handleSetTermInput = async()  => {     
    try {
      await tokensContractWithSigner.stakeTermSet(stakeTermInput);
     } catch (error) {
     console.error(error);
   }
 };

   

  const handleSetMinInput = async (e) => {
    e.preventDefault();
    await tokensContractWithSigner.stakeMinSet(stakeMinInput);
  };
  // Get payment
  const getPayment = async () => {
    try{
    if (tokenInfo.status) {
      await tokensContractWithSigner.getPayment();
    }
  }catch (error) {
      if (error.code === 4001) {
        alert("You denied transaction signature");
      }
  };
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
                <h3>Account Balance for Stake: {formatEther(tokenInfo.balance)}</h3>
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

            <form >
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
            {!tokenInfo ? (
              ""
            ) :(<div>
              <h4 className="font-bold flex text-[15px]">
                Current Term: {Number(tokenInfo.term)} seconds
              </h4>
              <h4 className="font-bold flex text-[15px]">
                Current Percent : {Number(tokenInfo.percent)} %
              </h4>
              <h4 className="font-bold flex text-[15px]">
                Current Min Stake: {Number(tokenInfo.min)} coins
              </h4>
              </div>)}
              <div className=" flex flex-row">
                <Clue
                  text={!tokenInfo ? (
                    ""
                  ) :(`You will get ${
                    currentValue * (Number(tokenInfo.percent) / 100)
                  } tokens, if stake current value for ${Number(tokenInfo.term)} seconds`)}
                >
                  &#9773;
                </Clue>
              </div>
              <form >
                {/* <h3>You will get {currentValue * (stakePercent / 100)} tokens, if stake current value for {stakeTerm} seconds</h3> */}

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
                  {!tokenInfo? "": 
                  tokenInfo.status ? <p>&#10004;</p> : <p>&#10008;</p>}
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

export async function getServerSideProps(context) {
  const address = context.query.address
  return {
    props: {address: address}, 
  }
}


export default NewToken;