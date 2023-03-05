import {useState} from "react"

const Footer = () => {
    const[contractAddress, setContractAddress] = useState("0x84CC24ADE74410149d46987C9455a434F900a92b")
    return (
<div className="flex p-10 bg-light-green justify-around font-Space text-[15px] ">
    <p> Our contract address:{contractAddress} </p>
</div>
    )
}
export default Footer;