import Link from "next/link"


function HomePage(){
  return (<>
  <div className="flex flex-col items-center font-Space">
  <div className="border rounded-xl shadow-xl p-10 mt-10">
    <h1>Информация по пользованию нашей площадкой</h1>
  </div>
  <div className="flex border justify-around  rounded-lg  shadow-lg p-32 mt-10 mb-10">
    <div className="flex flex-col items-center mr-10 p-4 rounded-lg border">
      <h1>Create your best token</h1>
      <Link className="bg-light-green p-2 rounded-xl shadow-xl" href="/tokenfactory">Create</Link>
    </div>
    <div className="flex flex-col items-center p-5 rounded-lg border">
      <h1>Token Management</h1>
      <Link className="bg-light-green p-2 rounded-xl shadow-xl" href="/newtoken">Management</Link>
    </div>
  </div>
  </div>
  </>)
}

export default HomePage




