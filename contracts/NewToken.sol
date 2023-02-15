// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NewToken is ERC20 {
    uint256 stakeID = 0;
    address public owner;
    mapping(address => uint256) public lockedTokens;
    mapping(address => Stake) public stakes;
    uint256 public stakePercent = 5;
    uint256 public stakeTerm = 5; //in seconds!
    uint256 public stakeMin = 100;
    struct Stake {
        uint256 id;
        uint256 count;
        uint256 date;
        uint256 term;
        uint256 percent;
    }

    constructor(
        string memory _name,
        string memory _symb,
        uint256 _ownerTokens,
        uint256 _systemTokens
    ) ERC20(_name, _symb) {
        _mint(
            tx.origin,
            _ownerTokens /** 10 ** decimals() why do i need decimals here? */
        );
        _mint(address(this), _systemTokens);
        owner = tx.origin;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Ownable: caller is not the owner");
        _;
    }

    //OWNER METHODS
    function mint(address to, uint256 _amount) public onlyOwner {
        _mint(to, _amount);
    }

    //stake settings
    function stakePercentSet(uint256 _amount) public onlyOwner {
        stakePercent = _amount;
    }

    function stakeTermSet(uint256 _amount) public onlyOwner {
        stakeTerm = _amount;
    }

    function stakeMinSet(uint256 _amount) public onlyOwner {
        stakeMin = _amount;
    }

    //stake methods
    function lockTokens(uint256 _amount) internal {
        require(balanceOf(tx.origin) >= _amount, "not enough tokens");
        _transfer(tx.origin, address(this), _amount);
        lockedTokens[tx.origin] = _amount;
    }

    function stakeCoins(uint256 _amount) public {
        require(_amount >= stakeMin, "need more tokens to stake!");
        lockTokens(_amount);
        Stake memory currentStake = Stake(
            stakeID,
            _amount,
            block.timestamp,
            stakeTerm,
            stakePercent
        );
        stakes[msg.sender] = currentStake;
    }

    function checkStake() public view returns (bool a) {
        if (
            block.timestamp >
            stakes[msg.sender].date + stakes[msg.sender].term * 1 seconds
        ) {
            if (lockedTokens[msg.sender] == stakes[msg.sender].count) {
                return (true);
            }
        } else {
            return (false);
        }
    }

    function getPayment() public {
        require(checkStake(), "you cant get money yet");
        lockedTokens[msg.sender] = 0;
        uint256 payment = stakes[msg.sender].count;
        _transfer(
            address(this),
            msg.sender,
            payment + ((payment * stakePercent) / 100)
        ); //MAY CRASH!!!
    }
}
