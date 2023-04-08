
import GetTokensFromAddress from "../../components/GetTokensFromAddress"
import { useEffect, useState } from "react"
import { Contract } from "ethers";
import Link from "next/link";
import contractTokenFactory from "../../data/tokenFactory"
import walletProvider from "../../walletProvider";
import abi from "../../data/newToken";
import AllTokensComp from "../../components/allTokensComp"
import Poginate from "../../components/Pogination";

function AllTokens(){
    const [allToken,setAllToken] = useState(false)
    const [tokenAddress,setTokenAddress] = useState([])
    const [names,setNames] = useState([])
    const [currentPage,setCurrentPage] = useState(1)
    const [tokenPerPage] = useState(5)
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
   
  
    const lastTokenIndex = currentPage * tokenPerPage
    const firstTokenIndex = lastTokenIndex - tokenPerPage
    const curentToken = tokenAddress.slice(firstTokenIndex,lastTokenIndex)
    const curentTokenName = names.slice(firstTokenIndex,lastTokenIndex)
    function poginate(pagenum){
      setCurrentPage(pagenum)
    }

    return(
     <>
     <div className="min-h-screen  flex flex-col justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">

     
     <div className=" items-center  text-[35px] flex justify-center mb-3  w-full h-1/3">
        <div className="bg-light-green/30 w-1/3 justify-center flex border font-Space rounded-xl backdrop-opacity-10 backdrop-invert">
          <button className="bg-yellow/20 rounded-xl "  onClick={handleClickAllTokens}>AllTokens</button>
          <h1 className="mr-4 ml-4">|</h1>
          <button className="bg-yellow/20 rounded-xl" onClick={handleClickYourTokens}>YourTokens</button>   
        </div>
         
     </div>
        
     {allToken === false?(
            <div >
                < AllTokensComp tokenAddress={curentToken} names={curentTokenName}/>
                <Poginate tokenPerPage={tokenPerPage}  totalToken={tokenAddress.length} paginate={poginate} />
             </div>
            
     ):( <div className=" flex justify-center items-center"> <GetTokensFromAddress/> </div> )}
       </div>
        </>  
    )
}
export default AllTokens