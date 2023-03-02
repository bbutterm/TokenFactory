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
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleOnChangeNameToken}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Symbol"
          value={symb}
          onChange={handleOnChangeSymb}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Owner Tokens"
          value={ownerTokens}
          onChange={handleOnChangeOwnerTokens}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="System Tokens"
          value={systemTokens}
          onChange={handleOnChangeSystemTokens}
        />
      </div>
      <div>
        <button onClick={createNewTokenTransaction}>Create Token</button>
      </div>
     
    </>
  );
}

export default TokenFactoryApp;