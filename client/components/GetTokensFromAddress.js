import { useState, useEffect } from "react";
import contractTokenFactory from "../data/tokenFactory";
import walletProvider from "../walletProvider";
import abi from "../data/newToken";
import { Contract } from "ethers";
import etherscan from "../data/logo_etherscan.png";
import Link from "next/link";
import Image from "next/image";

const GetTokensFromAddress = () => {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [addrr, setAddrr] = useState("");
  // const [nameArray, setNameArray] = useState([]);

  useEffect(() => {
    (async () => {
      const signer = await walletProvider.getSigner();
      const signedContract = contractTokenFactory.connect(signer);
      const addressArray = await signedContract.getAddr();
      setAddress(addressArray);
    })();
  }, []);

  const tokensContract = address.map(
    (adr) => new Contract(`${adr}`, abi, walletProvider)
  );

  useEffect(() => {
    try {
      (async () => {
        let tokens = [];
        for (let i = 0; i < tokensContract.length; i++) {
          let token = await tokensContract[i].name()     
          tokens.push(token)
          setName(tokens)
          console.log(name);
     } })();

    } catch (err) {
      console.error(err);
    }
    ;
 
  }, [address]);
 
  function info(index = 0) {
    setAddrr(address[index]); // Тут получаем индекс из кнопки и передаём переменной addrr элемент массива address
  }

  const url = "https://goerli.etherscan.io/address/" + `${addrr}`;


  console.log(address);
  console.log(name);
  

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">
        <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-20% backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
          <h1 className="font-bold flex mb-5 text-[30px]">Your tokens:</h1>

          <div className="flex  flex-col ">
                     {address.map((item, index) => (
              <ul key = {index} className="m-2  font-Space text-center text-[20px] ">
               {name[index]}

                <div className="flex flex-row mt-2 " >
               <div>
                  <Link
                    className="  bg-light-green rounded-md"        
                    onClick={() => info(index)}
                    href={url}
                   
                  >
                    <Image
                      className="w-12 h-12 rounded-md"
                      src={etherscan}
                      alt="scan"
                    />
                  </Link>
                  </div>
               
                  <div className = "ml-5 mt-2">
                  <Link
                    className="p-2 border  bg-light-green rounded-md"
                    onClick={() => info(index)}
                    href= {{pathname:"/newtokens", query: {item}}}
                   
                  >
                    Info
                  </Link>
                  </div>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default GetTokensFromAddress;
