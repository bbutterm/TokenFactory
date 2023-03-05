// React App
import { useState } from 'react';
import contractTokenFactory from '../data/tokenFactory'

function TokenFactoryApp() {
  
  const [name, setName] = useState('');
  const [symb, setSymb] = useState('');
  const [ownerTokens, setOwnerTokens] = useState(0);
  const [systemTokens, setSystemTokens] = useState(0);
  const [contractAddress, setContractAddress] = useState('');

  

  const createNewTokenTransaction = async (e) => {
      e.preventDefault(); 
      try {
        await contractTokenFactory.createNewToken(
          name,
          symb,
          ownerTokens,
          systemTokens         
  
        );
      } catch (err) {
        console.log(err);
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
    <div className='min-h-screen flex justify-center items-center'>
      <div className='flex flex-col shadow-2xl border p-12 rounded-xl'>
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
        <button className='border rounded-xl p-2 mt-5 bg-yellow' onClick={createNewTokenTransaction}>Create Token</button>
      </div>
      </div>
     </div>
    </>
  );
}

export default TokenFactoryApp;