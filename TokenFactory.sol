// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract TokenFactory {
    mapping(address => address) contractToOwner;
    address[] contractByID;

    function createNewToke(
        string memory _name,
        string memory _symb,
        uint256 _amount
    ) public returns (address) {
        NewToken newtoken = new NewToken(_name, _symb, _amount);
        contractToOwner[msg.sender] = address(newtoken);
        contractByID.push(address(newtoken));
        return (address(newtoken));
    }
}

contract NewToken is ERC20, ERC20Burnable {
    address public owner;
    bool isActive; //not used yet

    constructor(
        string memory _name,
        string memory _symb,
        uint256 _amount
    ) ERC20(_name, _symb) {
        _mint(
            tx.origin,
            _amount /** 10 ** decimals() why do i need decimals here? */
        );
        owner = tx.origin;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    modifier Active() {
        require(isActive, "Contract is not acitve");
        _;
    }

    //OWNER METHODS
    function mint(address to, uint256 _amount) public onlyOwner {
        _mint(to, _amount);
    }

    function startStaking() public onlyOwner {
        isActive = true;
    }
}
