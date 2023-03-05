import Link from "next/link";
import Button from "./comp/button";
const Header = () => {
  return (
    <div className="flex p-4 bg-light-green items-center justify-around font-Space text-[20px]">
      <Link href="/">Home</Link>
      <Link href="/tokenfactory">Factory</Link>
      <Link href="/newtoken">Tokens</Link>
      <div>
        <Button
          buttonStyle="connect"
          type="button"
          text="Connect your wallet"
        />
      </div>
    </div>
  );
};
export default Header;
