// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "./NewToken.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenFactory {
    mapping(address => address) contractToOwner;
    address[] contractByID;

    function createNewToken(
        string memory _name,
        string memory _symb,
        uint256 _ownerTokens,
        uint256 _systemTokens
    ) public returns (address) {
        NewToken newtoken = new NewToken(
            _name,
            _symb,
            _ownerTokens,
            _systemTokens
        );
        contractToOwner[msg.sender] = address(newtoken);
        contractByID.push(address(newtoken));
        return (address(newtoken));
    }
}
