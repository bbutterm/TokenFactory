import { useState } from "react";
import Link from "next/link";

function HomePage() {
  const [currentAccount, setCurrentAccount] = useState();
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
            sessionStorage.setItem("key", res);
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
    <div className=" flex  justify-center items-center bg-[url('../data/1614407098_44-p-skazochnii-temnii-fon-48.jpg')] bg-cover h-screen">
      <Link
        className="bg-gradient-to-t from-yellow via-orange to-white  p-2 rounded-full ml-12 mb-12 transform motion-safe:hover:scale-110 "
        onClick={onClickConnect}
        href={!currentAccount ? "" : "/startPage"}
      >
        Connect your wallet
      </Link>
    </div>
  );
}
export default HomePage;
