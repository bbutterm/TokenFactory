// React App
import { useState } from 'react';
import contractTokenFactory from '../data/tokenFactory'
import walletProvider from "../walletProvider"

function TokenFactoryApp() {
  
  const [name, setName] = useState('');
  const [symb, setSymb] = useState('');
  const [ownerTokens, setOwnerTokens] = useState(0);
  const [systemTokens, setSystemTokens] = useState(0);
  

  

  const createNewTokenTransaction = async (e) => {
      e.preventDefault(); 
    const signer = await walletProvider.getSigner()

    const signedContract = contractTokenFactory.connect(signer);
      try {
        await signedContract.createNewToke(
          name,
          symb,
          ownerTokens,
          systemTokens         
  
        );
      } catch (error) {
        console.error(error);
      }
    };


    const handleOnChangeNameToken = (e) => {
      setName(e.target.value);
    };

    const handleOnChangeSymb = (e) => {
      setSymb(e.target.value);
    };
    const handleOnChangeOwnerTokens = (e) => {
      setOwnerTokens(e.target.value);
    };
    const handleOnChangeSystemTokens = (e) => {
      setSystemTokens(e.target.value);
    };  
    

  return (
    <>
    <div className="min-h-screen flex justify-center items-center bg-[url('../data/forest-digital-art-fantasy-art-robot.jpg')]">
      <div className='flex flex-col shadow-2xl font-Space border p-12 rounded-xl backdrop-opacity-10 backdrop-invert bg-light-green/30 '>
        <h1 className='flex -mt-5 justify-center text-[25px] font-bold'>Create your token</h1>
      <div className='flex flex-col'>
        <label className='font-bold' htmlFor='name'>Name</label>
        <input
        id="name"
        className='border rounded-lg'
          type="text"
          placeholder="Bitcoin"
          value={name}
          onChange={handleOnChangeNameToken}
        />
      </div>
      <div className='flex flex-col'>
        <label className='font-bold' htmlFor='Symbol'>Symbol</label>
        <input
          id="Symbol"
          className='border rounded-lg'
          type="text"
          placeholder="BTC"
          value={symb}
          onChange={handleOnChangeSymb}
        />
      </div>
      <div className='flex flex-col'>
        <label className='font-bold' htmlFor='owner'>Owner Tokens</label>
        <input
          id="owner"
          className='border rounded-lg'
          type="number"
          placeholder="Owner Tokens"
          value={ownerTokens}
          onChange={handleOnChangeOwnerTokens}
        />
      </div>
      <div className='flex flex-col'>
        <label className='font-bold' htmlFor='System tokens'>System tokens</label>
        <input
           id="System tokens"
          className='border rounded-lg'
          type="number"
          placeholder="System Tokens"
          value={systemTokens}
          onChange={handleOnChangeSystemTokens}
        />
      </div>
      <div className='flex justify-center'>
        <button className=' rounded-xl p-2 mt-5 bg-orange/80 hover:scale-110 duration-300 ' onClick={createNewTokenTransaction}>Create Token</button>
      </div>
      </div>
     </div>
    </>
  );
}

export default TokenFactoryApp;