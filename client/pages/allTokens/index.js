
import GetTokensFromAddress from "../../components/GetTokensFromAddress"
import { useEffect, useState } from "react"
import { Contract } from "ethers";
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
    const [loader, setLoader]= useState(false)

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
        setLoader(true)
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
            setLoader(false)
          })();
        } catch (err) {
          setLoader(false)
          console.error(err);
        }
        }
       
      }, [tokenAddress]);

      const lastTokenIndex = currentPage * tokenPerPage
      const firstTokenIndex = lastTokenIndex - tokenPerPage
      const curentToken = tokenAddress.slice(firstTokenIndex,lastTokenIndex)
      const curentTokenName = names.slice(firstTokenIndex,lastTokenIndex)
    
    function handleClickAllTokens(){
        setAllToken(false)
    }
    function handleClickYourTokens(){
        setAllToken(true)
    }

    function poginate(pagenum){
      setCurrentPage(pagenum)
    }
    

    return(
     <>
     <div className="min-h-screen  flex flex-col justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">

     {loader === true ? 
        (<div className="h-60 w-60 ">
          <img src ="/loaderImage.gif" alt = 'loader'/> </div>)
  :
     (<div className=" text-[35px] h-1/3 justify-center items-center ">
      
        <div className="flex flex-row border-2  items-center  justify-center font-Space ml-10 rounded-xl  w-20% mb-3 bg-light-green/80  ">
          <button className="transform motion-safe:hover:scale-110"  onClick={handleClickAllTokens}>AllTokens</button>
          <h1 className="mr-4 ml-4">|</h1>
          <button className="transform motion-safe:hover:scale-110" onClick={handleClickYourTokens}>YourTokens</button>   
        </div>         
  

     {allToken === false?(
            <div >
                < AllTokensComp tokenAddress={curentToken} names={curentTokenName}/>
                <Poginate tokenPerPage={tokenPerPage}  totalToken={tokenAddress.length} paginate={poginate} />
             </div>
            
     ):( 
     <div className=" flex justify-center items-center"><GetTokensFromAddress/> </div> 
     )}
        </div> 
  
     )
}
       </div>
        </>  
    )
}
export default AllTokens