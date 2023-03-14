contract NewToken is ERC20, ERC20Burnable{
    uint stakeID = 0;
    address public owner;
    mapping (address=>uint) public lockedTokens;
    mapping (address=>Stake) public stakes;
    uint public id;
    uint public stakePercent =5;
    uint public stakeTerm = 5; //in seconds!
    uint public stakeMin = 100;
    struct Stake{
        uint id;
        uint count;
        uint date;
        uint term;
        uint percent;
    }
    
    constructor(string memory _name,string memory _symb,uint _ownerTokens,uint _systemTokens,uint _id) ERC20(_name, _symb) {
        id = _id;
        _mint(tx.origin,_ownerTokens * 10 ** decimals());
        _mint(address(this),_systemTokens*10**decimals());
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
    function stakePercentSet(uint _amount) public onlyOwner{
        stakePercent=_amount;
    }
    function stakeTermSet(uint _amount) public onlyOwner{
        stakeTerm=_amount;
    }
    function stakeMinSet(uint _amount) public onlyOwner{
        stakeMin=_amount;
    }
    
//stake methods
    function lockTokens(uint _amount) internal {
        require(balanceOf(tx.origin)>=_amount,"not enough tokens");
        _transfer(tx.origin,address(this),_amount);
        lockedTokens[tx.origin] = _amount;
    }
    function stakeCoins(uint _amount) public{
        require(_amount>=stakeMin,"need more tokens to stake!");
        lockTokens(_amount);
        Stake memory  currentStake =  Stake(stakeID,_amount,block.timestamp,stakeTerm,stakePercent);
        stakes[msg.sender]=currentStake;
    }
    function checkStake() public view returns (bool a){
        if (block.timestamp>stakes[msg.sender].date+ stakes[msg.sender].term*1 seconds){
            if (lockedTokens[msg.sender]==stakes[msg.sender].count){
                return (true);
            }
        }
        else{
            return (false);
        }
    }
    function getPayment() public{
        require (checkStake(),"you cant get money yet");
        lockedTokens[msg.sender] = 0;
        uint payment = stakes[msg.sender].count;
        _transfer(address(this),msg.sender,payment+(payment*stakePercent/100));  //MAY CRASH!!!
    }

}
