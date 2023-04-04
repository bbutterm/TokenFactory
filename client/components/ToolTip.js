import { useState } from "react"

const ToolTip = ({children}) =>{

    const [showToolTip, setShowToolTip] = useState(false)

    const onMouseEnterHandler = () => {
        setShowToolTip(true);
      };
    
      const onMouseLeaveHandler = () => {
        setShowToolTip(false);
      };

      return (
        <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
       {children}
        {showToolTip && <div className="absolute bg-light-green left-[100px] rounded-xl border">Hello</div>}
        </div>
      )
}
export default ToolTip 