import {useState, useEffect} from 'react'
import Link from "next/link";
import Button from "./comp/button";

const Header = () => {
  const [currentAccount, setCurrentAccount] =useState();




console.log(currentAccount)

  const onClickConnect = async () => {
    let signer = null;
    let provider;

    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
      provider = ethers.getDefaultProvider();
    }

    if (window.ethereum) {
      try {
        const accounts = await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((res) => {
            setCurrentAccount(res);
          });
        if (currentAccount) {
          alert("Successfully log in MetaMask");
        }
      } catch (error) {
        if (error.code === 4001) {
          alert("You didn't enter MetaMask account. Please, repeat the excess");
        }
        if (error.code === -32002) {
          alert(
            "You didn't enter MetaMask account. Please, enter the password"
          );
        } else {
          alert(error.message);
        }
      }
    } else {
         signer = await provider.getSigner();
    }
  };
  return (
    <div className="flex p-4 bg-light-green items-center justify-around font-Space text-[20px]">
      <Link href="/">Home</Link>
      <Link href="/tokenfactory">Factory</Link>
      <Link href="/allTokens">Tokens</Link>
      <div>
        <Button
          buttonStyle="connect"
          type="button"
          onClick={onClickConnect }
          text={
            !currentAccount
              ? "Connect your wallet"
              : `${currentAccount.map(
                  (account) =>
                    account.substring(0, 5) + "....." + account.slice(37)
                )}`
              }        
        />
      </div>
    </div>
  );
};
export default Header;
