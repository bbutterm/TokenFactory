import Link from "next/link";
import { useState } from "react";

function HomePage() {
  const [showButtonRight, setButtonRight] = useState(false);
  const [showButtonLeft, setButtonLeft] = useState(false);

  const onMouseEnterHandlerRight = () => {
    setButtonRight(true);
  };
  const onMouseLeaveHandlerRight = () => {
    setButtonRight(false);
  };

  const onMouseEnterHandlerLeft = () => {
    setButtonLeft(true);
  };
  const onMouseLeaveHandlerLeft = () => {
    setButtonLeft(false);
  };

  return (
    <>
      <div className=" flex  justify-center items-center bg-[url('../data/1614407098_44-p-skazochnii-temnii-fon-48.jpg')] bg-cover h-screen">
        <Link
          onMouseEnter={onMouseEnterHandlerLeft}
          onMouseLeave={onMouseLeaveHandlerLeft}
          className=" bg-yellow p-4 rounded-full mr-12 mt-10 animate-pulse hover:bg-sky-blue"
          href="/tokenfactory"
        >
          {showButtonLeft && <div className="font-Space">Create token</div>}
        </Link>

        <Link
          onMouseEnter={onMouseEnterHandlerRight}
          onMouseLeave={onMouseLeaveHandlerRight}
          className=" bg-yellow p-6 rounded-full ml-12 mb-12 animate-pulse hover:bg-sky-blue "
          href="/alltokens"
        >
          {showButtonRight && (
            <div className="font-Space">Management tokens</div>
          )}
        </Link>
      </div>
    </>
  );
}
export default HomePage;
