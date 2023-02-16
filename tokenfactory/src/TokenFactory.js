// React App

import React, { useState } from 'react';
import { ethers } from 'ethers';

function TokenFactoryApp() {
  const [name, setName] = useState('');
  const [symb, setSymb] = useState('');
  const [ownerTokens, setOwnerTokens] = useState(0);
  const [systemTokens, setSystemTokens] = useState(0);
  const [contractAddress, setContractAddress] = useState('');

  async function createNewToken() {
    const provider = ethers.getDefaultProvider();
    const signer = provider.getSigner();

    //const tokenFactoryContract = new ethers.Contract(
    //  "0x0000000000000000000000000000000000000000",
    //  TokenFactory.abi,
    //  signer
    //);

    //const tx = await tokenFactoryContract.createNewToken(
    //  name,
    //  symb,
    //  ownerTokens,
    //  systemTokens
    //);

    //const receipt = await tx.wait();
    //const contractAddress = receipt.contractAddress;
    //setContractAddress(contractAddress);
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