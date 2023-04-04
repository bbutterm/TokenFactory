
import GetTokensFromAddress from "../../components/GetTokensFromAddress"
import { useEffect, useState } from "react"
import { Contract } from "ethers";
import Link from "next/link";
import contractTokenFactory from "../../data/tokenFactory"
import walletProvider from "../../walletProvider";
import abi from "../../data/newToken";

function AllTokens(){
    const [allToken,setAllToken] = useState(false)
    const [tokenAddress,setTokenAddress] = useState([])
    const [names,setNames] = useState([])
    const [addrr, setAddrr] = useState("");
    console.log(names ,"name")
    useEffect(()=>{
        (async()=>{
            const signer = await walletProvider.getSigner();
            const signedContract = contractTokenFactory.connect(signer);
            setTokenAddress(await signedContract.getContracts())  
        })()
    },[])
    const tokensContract = (tokenAddress.map(adr => new Contract(`${adr}`, abi, walletProvider)
      ))
      useEffect(() => {
        if(tokenAddress.length !==0){
           try {
          (async () => {
            let tokens = [];
            for (let i = 0; i < tokensContract.length; i++) {
                let token = {
                name: await tokensContract[i].name(),
              }
              tokens.push(token);
            }
            console.log(tokens);
            setNames(tokens);
          })();
        } catch (err) {
          console.error(err);
        }
        }
       
      }, [tokenAddress]);
    
    function handleClickAllTokens(){
        setAllToken(false)
    }
    function handleClickYourTokens(){
        setAllToken(true)
    }
    function info(index = 0) {
      setAddrr(address[index])
    }
  
    const url = "https://mumbai.polygonscan.com/address/" + `${addrr}`;
    return(
     <>
     <div className="min-h-screen  flex flex-col justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">

     
     <div className=" items-center  text-[35px] flex justify-center mb-3  w-full h-1/3">
        <div className="bg-light-green/30 w-1/3 justify-center flex border font-Space rounded-xl backdrop-opacity-10 backdrop-invert">
          <button  onClick={handleClickAllTokens}>AllTokens</button>
          <h1 className="mr-4 ml-4">|</h1>
          <button onClick={handleClickYourTokens}>YourTokens</button>   
        </div>
         
     </div>
        
     {allToken === false?(
            <div >
                <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-20% backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
                <h1 className="font-bold flex mb-5 text-[30px]">All tokens:</h1>
                <div className="flex  flex-col ">
                
                     {tokenAddress.map((item, index) => (
                            <ul
                              key={index}
                              className="m-2  font-Space text-center text-[20px] "
                            >
                               
                              {names.length !== 0 ?names[index].name:""}
            
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
                     </div>
                </div>
             </div>
            
     ):( <div className="h-screen"> <GetTokensFromAddress/> </div> )}
       </div>
        </>  
    )
}
export default AllTokens