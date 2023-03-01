import Link from "next/link";
import Button from "./comp/button" 
const Header = () => {
    return (
<div className="flex p-4 bg-red-200 justify-around text-[20px]">
    <Link href="/">Home</Link>
    <Link href="/tokenfactory">Factory</Link>
    <Link href="/newtoken">Token</Link>
    <div><Button /></div>
</div>
    )
}
export default Header;