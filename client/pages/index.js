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
          className=" bg-gradient-to-t from-yellow via-orange to-white p-2 rounded-full mr-12 mt-12 transform motion-safe:hover:scale-110 "
          href="/tokenfactory"
        >
          <div className="font-Space">Create token</div>
        </Link>

        <Link
          className="bg-gradient-to-t from-yellow via-orange to-white  p-2 rounded-full ml-12 mb-12 transform motion-safe:hover:scale-110 "
          href="/alltokens"
        >
          <div className="font-Space">Management tokens</div>
        </Link>
      </div>
    </>
  );
}
export default HomePage;
