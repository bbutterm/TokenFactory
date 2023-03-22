import walletProvider from "../walletProvider";
import {Contract} from "ethers"

const address = "0x253E9d9F3d36D1749eB65d5832e7c46E046FdDd9"
 const abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_tokenAddr",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "_TokenName",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "string",
				"name": "_TokenSymb",
				"type": "string"
			}
		],
		"name": "NewTokenCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symb",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_ownerTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_systemTokens",
				"type": "uint256"
			}
		],
		"name": "createNewToke",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAddr",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownerToContracts",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const ethABI = [
    "function createNewToke(string memory _name,string memory _symb,uint _ownerTokens,uint _systemTokens) public returns(address)",
    "function getAddr() public view returns(address[] memory)"
   ]

const contractTokenFactory = new Contract(address, ethABI, walletProvider);

export default contractTokenFactory