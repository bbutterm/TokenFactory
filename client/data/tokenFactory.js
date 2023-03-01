import provider from "../walletProvider";
import {Contract} from "ethers"

const address = "0x84CC24ADE74410149d46987C9455a434F900a92b"
 const abi = [
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
    }
]
const ethABI = [
    "function createNewToken(string memory _name,string memory _symb,uint256 _ownerTokens,uint256 _systemTokens) public returns (address)"
   ]


const contractTokenFactory = new Contract(address, ethABI, provider);

export default contractTokenFactory