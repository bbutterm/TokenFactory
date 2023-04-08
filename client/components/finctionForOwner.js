import Button from "./comp/button"


function FunctionOnlyOwner({
    stakeTermInput,
    onChangeStakeTermInput,
    onSetTermInput,
    stakePercentInput,
    onStakePercentInput,
    handleSetPercentInput,
    stakeMinInput,
    onChangeMinInput,
    onSetTime
}){
    return(
    <div className="flex flex-col w-full items-center ">
        <h1 className="flex font-bold text-[20px]">
            Stake Settings(onlyowner)
        </h1>

          <div className="flex mr-auto w-9/12 flex-col">
            <form className="flex flex-col" >
              <h4>Stake Term (
              <select className="bg-light-green/30 rounded-xl backdrop-opacity-10 backdrop-invert" onChange={onSetTime}>
              <option value="3600">hours</option>
              <option value="86400">day</option>
              <option value="604800">week</option>
              <option value="2592000">mounth</option>
            </select>
              )
            </h4>
              
              <div className="flex items-center">
                <input
                  className="w-9  text-center rounded-xl"
                  label="Stake Term"
                  value={stakeTermInput}
                  onChange={onChangeStakeTermInput}
                />
                <br />
                <input
                  type="range"
                  max="50"
                  className=" appearance-none h-2 rounded-xl   bg-blue "
                  value={stakeTermInput}
                  onChange={onChangeStakeTermInput}
                />
                <Button buttonStyle="light" type="button" text="Set Term"
                onClick = {onSetTermInput} />
              </div>
            </form>

            <h4>Stake Percent</h4>
            <form className="flex flex-col ">
              <div className="flex items-center ">
                <input
                  className="w-9 text-center rounded-xl"
                  value={stakePercentInput}
                  onChange={(e) =>  onStakePercentInput(e.target.value)}
                />
                <input
                  type="range"
                  max="50"
                  className="bg-blue flex text-blue"
                  value={stakePercentInput}
                  onChange={(e) =>  onStakePercentInput(e.target.value)}
                />
                <Button buttonStyle="light" type="button" text="Set Percent"
                onClick = {handleSetPercentInput} />
              </div>
            </form>

            <form >
              <h4>Stake Minimal Count</h4>
              <div className="flex items-center ">
                <input
                  className="border rounded-l-xl p-1 text-center"
                  label="Stake Min"
                  value={stakeMinInput}
                  onChange={onChangeMinInput}
                />
                <button className="border  bg-light-green p-1 rounded-r-xl">
                  Set Count
                </button>
              </div>
            </form>
    </div>
</div>
    )
}

export default FunctionOnlyOwner