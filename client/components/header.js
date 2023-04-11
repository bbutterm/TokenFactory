import Link from "next/link";
import {useState, useEffect} from "react"



const Header = () => {
const[account, setAccount] = useState('') 

useEffect(()=>{    
  setAccount(sessionStorage.getItem('key'))
})

  return (
    <>
    <div className="flex p-4 bg-light-green items-center justify-around font-Space text-[20px]">
      <Link href="/">Home</Link>
      <Link href="/tokenfactory">Factory</Link>
      <Link href="/allTokens">Tokens</Link>
      <div>
        {         
            !account
              ? "Connect your wallet"
              : `Your address: ${
                  account.substring(0, 5) + "....." + account.slice(37)
                }`         
              }        
      
      </div>
    </div>
    </>
  );
};
export default Header