import Link from "next/link"


function HomePage(){

  return (<>    
  <div className=" flex  justify-center items-center bg-[url('../data/1614407098_44-p-skazochnii-temnii-fon-48.jpg')] bg-cover h-screen">        
      <Link className="bg-yellow p-5 rounded-full mr-12 mt-10 animate-pulse hover:bg-sky-blue group-hover:block text-xs" href="/tokenfactory" data-te-toggle="create" data-te-placement="top" data-te-ripple-color="yellow"  title="Create token"></Link>     
      <Link className=" bg-yellow p-8 rounded-full ml-12 mb-12 animate-pulse hover:bg-sky-blue group-hover:block text-xs" href="/newtoken" data-te-toggle="management" data-te-placement="top" data-te-ripple-color="yellow"  title="Management tokens"></Link>  
  </div>  
  </>)
}
export default HomePage




