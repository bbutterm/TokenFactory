    const Button = ({ buttonStyle, type, text, onClick,disabled, image}) => {
        return (
          <div className="p-1">
            <button
              className={
                buttonStyle === "connect" ? roundedButtonConnectWallet : null||
                buttonStyle === "desabled" ? desabledButton : null||
                buttonStyle === "casual" ? casualButton: null||
                buttonStyle === "light" ? casualButtonLight: null
              }
              type={type}
              onClick={onClick}
              disabled ={disabled}
            >
              {image}{text}
            </button>
          </div>
        );
      };
      const roundedButtonConnectWallet =
        " min-w-xs max-w-xs transition ease-in-out delay-150  text-ellipsis overflow-hidden ... font-Space bg-sky-blue  border-2 border-blue text-xl p-4 rounded-xl";
     const desabledButton = " bg-transparent border: none !important  text-yellow font-Chewy text-xl  "
export default Button
const casualButton =  " min-w-xs max-w-xs transition ease-in-out delay-150  text-ellipsis overflow-hidden ... font-Space bg-sky-blue  border-2 border-blue text-md p-2 rounded-xl"
const casualButtonLight = 'border p-1 bg-light-green rounded-xl'