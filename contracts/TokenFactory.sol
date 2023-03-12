// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "./NewToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenFactory{
    mapping(address=>address[]) public ownerToContracts;
    address[] contractByID;
    event NewTokenCreated(address _tokenAddr,address _owner, string indexed  _TokenName,string indexed _TokenSymb);
    uint count = 0;

    function createNewToke(string memory _name,string memory _symb,uint _ownerTokens,uint _systemTokens) public returns(address) {
        count+=1;
        NewToken newtoken = new NewToken(_name,_symb,_ownerTokens,_systemTokens,count);
        ownerToContracts[msg.sender].push(address(newtoken));
        contractByID.push(address(newtoken));
        emit NewTokenCreated(address(newtoken),msg.sender,_name,_symb);
        return(address(newtoken));
    }
    function getAddr(address _owner) public view returns(address[] memory){
        return(ownerToContracts[_owner]);
    }
}
