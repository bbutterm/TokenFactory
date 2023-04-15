    const Button = ({ buttonStyle, type, text, onClick,disabled, image, href}) => {
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
              href = {href}
            >
              {image}{text}
            </button>
          </div>
        );
      };
      const roundedButtonConnectWallet =
        " min-w-xs max-w-xs transition ease-in-out delay-150  text-ellipsis overflow-hidden ... font-Space bg-sky-blue  border-2 border-blue text-xl p-4 rounded-xl hover:bg-light-blue hover:-translate-y-1 hover:scale-110 duration-300 ";
     const desabledButton = " bg-transparent border: none !important  text-yellow font-Chewy text-xl  "

const casualButton =  " min-w-xs max-w-xs transition ease-in-out delay-150  text-ellipsis overflow-hidden ... font-Space bg-sky-blue  border-2 border-blue text-md p-2 rounded-xl hover:scale-110 duration-300"
const casualButtonLight = 'border p-1 bg-light-green rounded-xl hover:scale-110 duration-300'
export default Button