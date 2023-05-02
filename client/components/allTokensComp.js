import { useState } from "react";
import Link from "next/link";

function AllTokensComp({tokenAddress,names}){
    const [addrr, setAddrr] = useState("");
    function info(index = 0) {
        setAddrr(tokenAddress[index])
    
      }

    const url = "https://mumbai.polygonscan.com/address/" + `${addrr}`;
    return (
        <div className="flex flex-col border  items-center font-Space p-5 ml-10 rounded-xl  w-20% backdrop-opacity-10 backdrop-invert bg-light-green/30 ">
                <h1 className="font-bold flex mb-5 text-[30px]">All tokens:</h1>
                <div className="flex  flex-col ">
                
                     {tokenAddress.map((item, index) => (
                            <ul
                              key={index}
                              className="m-2  font-Space text-center text-[20px] "
                            >
                               
                             <h1 className="font-bold">{names.length !== 0 ?names[index].name:""}</h1> 
            
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
    )
}

export default AllTokensComp