import { useState } from "react"

const Clue = ({children,text}) =>{
    const [showToolTip, setShowToolTip] = useState(false)

    const onMouseEnterHandler = () => {
        setShowToolTip(true);
      };
    
      const onMouseLeaveHandler = () => {
        setShowToolTip(false);
      };

      return (
        <div className="w-2" onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        {children}
        {showToolTip && <div className="absolute bg-yellow left-[100px] rounded-xl border">{text}</div>}
        </div>
      )
}
export default Clue