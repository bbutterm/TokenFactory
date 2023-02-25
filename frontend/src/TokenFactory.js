// React App

import React, { useState } from 'react';
import { Contract, ethers } from 'ethers';
import abi from "./abi2.json"
function TokenFactoryApp() {
  const address = "0x84CC24ADE74410149d46987C9455a434F900a92b"
  const [name, setName] = useState('');
  const [symb, setSymb] = useState('');
  const [ownerTokens, setOwnerTokens] = useState(0);
  const [systemTokens, setSystemTokens] = useState(0);
  const [contractAddress, setContractAddress] = useState('');

  async function createNewToken() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new Contract(address, abi, signer);
    const tx = await contract.createNewToke(name, symb, ownerTokens, systemTokens);
    console.log(tx)

  }

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Symbol"
          value={symb}
          onChange={(e) => setSymb(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="Owner Tokens"
          value={ownerTokens}
          onChange={(e) => setOwnerTokens(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          placeholder="System Tokens"
          value={systemTokens}
          onChange={(e) => setSystemTokens(e.target.value)}
        />
      </div>
      <div>
        <button onClick={createNewToken}>Create Token</button>
      </div>
      <div>
        Contract address: {contractAddress}
      </div>
    </>
  );
}

export default TokenFactoryApp;