import { useState, useEffect } from "react";
import contractTokenFactory from "../data/tokenFactory";
import walletProvider from "../walletProvider";
import abi from "../data/newToken";
import { Contract } from "ethers";
import Link from "next/link";
import Poginate from "../components/Pogination";


const GetTokensFromAddress = () => {
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [addrr, setAddrr] = useState("");
 const [loader, setLoader] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    (async () => {
      const signer = await walletProvider.getSigner();
      const signedContract = contractTokenFactory.connect(signer);
      const addressArray = await signedContract.getAddr();
      setAddress(addressArray);
    })();
  }, []);
 
const arrayAddress = [...address]
arrayAddress.reverse()
  const tokensContract = arrayAddress.map(
    (adr) => new Contract(`${adr}`, abi, walletProvider)
  );

  useEffect(() => {
    setLoader(true)
    if(address.length !==0){
    try {
      (async () => {
        let tokens = [];
        for (let i = 0; i < tokensContract.length; i++) {
          let token = await tokensContract[i].name();
          tokens.push(token);
        }
        setName(tokens);
        setLoader(false)
      })();
    } catch (err) {
      setLoader(false)
      console.error(err);
    }
  }
  }, [address]);


  const tokenPerPage = 5
  const lastTokenIndex = currentPage * tokenPerPage;
  const firstTokenIndex = lastTokenIndex - tokenPerPage;
  const currentYourToken = arrayAddress.slice(firstTokenIndex, lastTokenIndex);
  const currentTokenYourName = name.slice(firstTokenIndex, lastTokenIndex);

  function info(index = 0) {
    setAddrr(currentYourToken[index]); // Тут получаем индекс из кнопки и передаём переменной addrr элемент массива address
  }
  const url = "https://mumbai.polygonscan.com/address/" + `${addrr}`;

  function poginate(pagenum) {
    setCurrentPage(pagenum);
  }

  return (
    <>
      
        <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-20% backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
          
       
          <h1 className="font-bold flex mb-5 text-[30px]">Your tokens:</h1>
          
          {address.length === 0? (
            <Link
              className="rounded-xl p-2 mt-5 bg-orange"
              href="/tokenfactory"
            >
              Create your token
            </Link>
          ) : (<div className="flex  flex-col ">
            
              
              {currentYourToken.map((item, index) => (
                <ul
                  key={index}
                  className="m-2  font-Space text-center text-[20px] "
                >
                  {currentTokenYourName[index]}

                  <div className="flex flex-row mt-2 ">

                    <div className=" font-bold text-[15px] underline" >
                      <Link onClick={() => info(index)} href={url}>
                      {item}
                      </Link>
                    </div>

                    <div className="ml-5 ">
                      <Link
                        className=" border p-1  text-[15px] bg-light-green rounded-md"
                        onClick={() => info(index)}
                        href={{pathname:"/allTokens/newtoken",
                        query:{address:`${item}`}}}
                      >
                        Info
                      </Link>
              
                    </div>
                    
                  </div>
                </ul>
              ))}
                  <Poginate
                  tokenPerPage={tokenPerPage}
                  totalToken={address.length}
                  paginate={poginate}
                />
            </div>
          )}
              
        </div>      
    </>
  );
};
export default GetTokensFromAddress;
