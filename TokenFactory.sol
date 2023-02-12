// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract TokenFactory{
    mapping(address=>address) contractToOwner;
    address[] contractByID;
    

    function createNewToke(string memory _name,string memory _symb,uint _amount) public returns(address) {
        NewToken newtoken = new NewToken(_name,_symb,_amount);
        contractToOwner[msg.sender] = address(newtoken);
        contractByID.push(address(newtoken));
        return(address(newtoken));
    }
}

contract NewToken is ERC20, ERC20Burnable{
    address public owner;
    uint stakeID = 0;
    bool isActive; //not used yet
    mapping (address=>uint) public lockedTokens;
    mapping (address=>Stake) public stakes;
    struct Stake{
        uint id;
        uint count;
        uint date;
        uint term;
        uint percent;
    }
    
    constructor(string memory _name,string memory _symb,uint _amount) ERC20(_name, _symb) {
        _mint(tx.origin, _amount /** 10 ** decimals() why do i need decimals here? */);
        _mint(address(this),10000);
        owner = tx.origin;
    }
    
    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    modifier Active(){
        require(isActive,"Contract is not acitve");
        _;
    }
    
    

//OWNER METHODS
    function mint(address to, uint256 _amount) public onlyOwner {
        _mint(to, _amount);
    }

    function startStaking() public onlyOwner{
        isActive = true;
    }


//stake methods
    function lockTokens(uint _amount) internal {
        require(balanceOf(tx.origin)>_amount,"not enough tokens");
        _transfer(tx.origin,address(this),_amount);
        lockedTokens[tx.origin] = _amount;
    }
    function stakeCoins(uint _amount) public{
        lockTokens(_amount);
        Stake memory  currentStake =  Stake(stakeID,_amount,block.timestamp,1,10);
        stakes[msg.sender]=currentStake;
    }
    function checkStake() public view returns (bool a){
        if (block.timestamp>stakes[msg.sender].date+ stakes[msg.sender].term*20 seconds){
            if (lockedTokens[msg.sender]==stakes[msg.sender].count){
                return (true);
            }
        }
        else{
            return (false);
        }
    }

    function getPayment() public returns (bool a){
        if (checkStake()){
            lockedTokens[msg.sender] = 0;
            uint payment = stakes[msg.sender].count;
            _transfer(address(this),msg.sender,payment+(payment*10/100));
            return true;
        }
        else{
            return false;
        }
    }

}
