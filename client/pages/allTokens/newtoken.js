import { useState, useEffect } from "react";
import walletProvider from "../../walletProvider";
import Button from "../../components/comp/button";
import abi from "../../data/newToken";
import { Contract, formatEther } from "ethers";
import FunctionOnlyOwner from "../../components/finctionForOwner";
import addTokenInMetomask from "../../components/addTokenInMetomask";

const NewToken = ({ address }) => {
  //CONNECT

  const [wallet, setWallet] = useState();
  const [tokenInfo, setTokenInfo] = useState();
  const [currentValue, setCurrentValue] = useState(0);
  const [stakePercentInput, setStakePercentInput] = useState(0);
  const [stakeTermInput, setStakeTermInput] = useState(0);
  const [stakeMinInput, setStakeMinInput] = useState();
  const [ownerAddress, setOwnerAddress] = useState("");
  const [user, setUser] = useState();
  const [time, setTime] = useState(3600);
  const [period, setPeriod] = useState(60);
  const [balance, setBalance] = useState();
  const [loader, setLoader] = useState(false);
  const [countBenefit, setCountBenefit] = useState(" ");

  const tokensContract = new Contract(address, abi, walletProvider);

  // Connect to wallet
  useEffect(() => {
    async function connect() {
      const signer = await walletProvider.getSigner();

      setWallet(signer);
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((res) => {
          setUser(res);
        });
      setOwnerAddress(signer.address);
    }
    connect();
  }, []);

  const tokensContractWithSigner = new Contract(address, abi, wallet);

  // Connect to token contract
  useEffect(() => {
    setLoader(true);
    try {
      (async () => {
        let token = {
          name: await tokensContract.name(),
          symbol: await tokensContract.symbol(),
          decimals: await tokensContract.decimals(),
          count: await tokensContract.totalSupply(),
          percent: await tokensContract.stakePercent(),
          term: await tokensContract.stakeTerm(),
          min: await tokensContract.stakeMin(),
          status: await tokensContract.checkStake(),
          owner: await tokensContract.owner(),
        };
        setTokenInfo(token);
        setLoader(false);
      })();
    } catch (err) {
      setLoader(false);
      console.error(err);
    }
  }, [wallet]);

  useEffect(() => {
    try {
      (async () => {
        if (ownerAddress) {
          const ownerBalance = await tokensContract.balanceOf(ownerAddress);
          setBalance(ownerBalance);
        }
      })();
    } catch (err) {
      console.error(err);
    }
  });

  useEffect(() => {
    setCountBenefit("");
    if (tokenInfo && currentValue && currentValue < balance) {
      setCountBenefit(
        `You will get ${
          currentValue * (Number(tokenInfo.percent) / 100)
        } tokens, if stake for ${Number(tokenInfo.term)} seconds`
      );
    } else {
      setCountBenefit("");
    }
  }, [currentValue]);

  //Stake functions

  const handleCurrentValue = (e) => {
    setCurrentValue(e.target.value);
  };
  const handleChangeMinInput = (e) => {
    if (stakeMinInput > Number(tokenInfo.balance)) {
      alert("Enter less amount ");
    }
    setStakeMinInput(e.target.value);
  };

  // Stake tokens
  const stakeCoins = async (e) => {
    e.preventDefault();

    if (currentValue < tokenInfo.min || currentValue > balance) {
      alert("Your tokens not enough for stake");
    } else {
      const amount = BigInt(currentValue * 10 ** 18);
      await tokensContractWithSigner.stakeCoins(amount);
    }
  };
  //Stake Settings
  const handleChangeStakeTermInput = (e) => {
    e.preventDefault();
    setStakeTermInput(Number(e.target.value));
  };
  const handleSetPercentInput = async (e) => {
    e.preventDefault();
    try {
      await tokensContractWithSigner.stakePercentSet(stakePercentInput);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSetTermInput = async () => {
    try {
      let times = Number.parseInt(time, 10);
      await tokensContractWithSigner.stakeTermSet(stakeTermInput * times);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSetMinInput = async (e) => {
    e.preventDefault();
    try {
      await tokensContractWithSigner.stakeMinSet(stakeMinInput);
    } catch (error) {
      console.error(error);
    }
  };
  // Get payment
  const getPayment = async () => {
    try {
      if (tokenInfo.status) {
        await tokensContractWithSigner.getPayment();
      }
    } catch (error) {
      if (error.code === 4001) {
        alert("You denied transaction signature");
      }
    }
  };
  function handleSetTime(e) {
    setTime(e.target.value);
  }
  function handleSetPeriod(e) {
    let time = Number(e.target.value);
    setPeriod(time);
  }

  return (
    <>
      <div className="min-h-screen  flex justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">
        {loader === true ? (
          <div className="h-60 w-60 ">
            <img src="/loaderImage.gif" alt="loader" />{" "}
          </div>
        ) : (
          <div className="flex flex-col  items-center font-Space p-5 ml-10 rounded-xl border  w-2/5 backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
            <h1 className="font-bold flex mb-5 text-[30px]">Account INFO</h1>

            <div className="flex w-10/12 flex-col font-bold text-[15px]">
              {!tokenInfo ? (
                ""
              ) : (
                <div>
                  <h3>Token Name: {tokenInfo.name}</h3>
                  <h3>Total supply: {formatEther(tokenInfo.count)}</h3>
                  <h1>Your balance :{formatEther(balance)}</h1>
                </div>
              )}
            </div>
            <h1 className="w-10/12">
              {ownerAddress === tokenInfo?.owner ? (
                <FunctionOnlyOwner
                  getBalance={balance}
                  stakeTermInput={stakeTermInput}
                  onChangeStakeTermInput={handleChangeStakeTermInput}
                  onSetTermInput={handleSetTermInput}
                  stakePercentInput={stakePercentInput}
                  onStakePercentInput={setStakePercentInput}
                  handleSetPercentInput={handleSetPercentInput}
                  stakeMinInput={stakeMinInput}
                  onStakeMinInput={handleChangeMinInput}
                  handleSetMinInput={handleSetMinInput}
                  onSetTime={handleSetTime}
                />
              ) : (
                "You are not an owner"
              )}
            </h1>
            {balance > 0 ? (
              <div className="flex w-10/12 flex-col text-[15px]">
                <h1 className="flex justify-center text-[20px] font-bold mt-3 mb-2">
                  Stake Tokens
                </h1>

                <div className="flex  w-10/12 flex-col">
                  {!tokenInfo ? (
                    ""
                  ) : (
                    <div>
                      <h4 className="font-bold flex text-[15px]">
                        Current Term:{" "}
                        {(Number(tokenInfo.term) / period).toFixed(2)}
                        <select
                          className="ml-2 bg-light-green/30 rounded-xl backdrop-opacity-10 backdrop-invert"
                          onChange={handleSetPeriod}
                        >
                          <option value="60">minutes </option>
                          <option value="3600"> hours </option>
                          <option value="86400"> day</option>
                          <option value="604800"> week</option>
                          <option value="2592000"> mounth</option>
                        </select>
                      </h4>
                      <h4 className="font-bold flex text-[15px]">
                        Current Percent : {Number(tokenInfo.percent)} %
                      </h4>
                      <h4 className="font-bold flex text-[15px]">
                        Current Min Stake: {Number(tokenInfo.min)} coins
                      </h4>
                    </div>
                  )}
                  <div className=" flex flex-row">{countBenefit}</div>
                  <form>
                    <input
                      className=" rounded-l-xl text-center p-1"
                      onChange={handleCurrentValue}
                      label={currentValue}
                    ></input>
                    <button
                      className="border  bg-light-green rounded-r-xl p-1"
                      onClick={stakeCoins}
                    >
                      Stake
                    </button>
                  </form>
                </div>
                <div className="flex  w-10/12 flex-col m-1 mt-3 mb-2">
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
                      {!tokenInfo ? (
                        ""
                      ) : tokenInfo.status ? (
                        <p>&#10004;</p>
                      ) : (
                        <p>&#10008;</p>
                      )}
                    </status>
                  </div>
                  <div className="flex flex-row justify-between">
                    <Button
                      buttonStyle="casual"
                      type="button"
                      text="Get Payment"
                      onClick={getPayment}
                    />
                    <Button
                      buttonStyle="add"
                      type="button"
                      text="Add token to Metamask"
                      onClick={() =>
                        addTokenInMetomask(
                          address,
                          tokenInfo.symbol,
                          tokenInfo.decimals
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="font-bold text-[20px]">
                You haven't this tokens
                <div className="flex justify-center">
                  <Button
                    buttonStyle="casual"
                    type="button"
                    text="Get Payment"
                    onClick={getPayment}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const address = context.query.address;
  return {
    props: { address: address },
  };
}

export default NewToken;
