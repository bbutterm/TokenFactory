function Poginate ({tokenPerPage,totalToken,paginate}){

    const pageNum = []

    for(let i = 1; i <= Math.ceil(totalToken/tokenPerPage);i++){
        pageNum.push(i)
    }

    return (
        <div>
            <ul className="flex  border  font-Space  mt-3 ml-10 rounded-xl  w-20% backdrop-opacity-10 backdrop-invert bg-light-green/20">
                {
                    pageNum.map(num => <li  key={num}>
                      <button className="border ml-4 w-10 rounded-md bg-light-green" onClick={()=>paginate(num)} >{num}</button>  
                        </li>)
                }
            </ul>
        </div>
    )
} 
export default  Poginate