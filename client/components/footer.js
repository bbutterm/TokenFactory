import {useState} from "react"

const Footer = () => {
    const[contractAddress, setContractAddress] = useState("0x472CA6ef322C6204bf0eB339CD9b42568A6b1eB0")
    return (
<div className="flex p-10 bg-light-green justify-around font-Space text-[15px] ">
    <p> Our contract address:{contractAddress} </p>
</div>
    )
}
export default Footer;