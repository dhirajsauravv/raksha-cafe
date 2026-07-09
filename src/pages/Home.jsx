import { Link } from "react-router";

function Home() {
  return (
    <header
      className="relative min-h-screen  pt-24 bg-[url(./assests/hero.jpg)] bg-cover bg-center text-white flex 
    "
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative z-[2] max-w-[650px] text-center">
          <h1 className="inline-block text-amber-100 font-bold  uppercase text-4xl tracking-[1px] mb-4 relative text-shadow-lg text-shadow-amber-700 mb-50">
            Welcome to Raksha Cafe
          </h1>
          <br />
          <button className="px-5 py-2.5 bg-amber-300 hover:bg-amber-300/90 ease-in-out  text-white font-medium rounded-xl  duration-100 text-4xl hover:scale-105">
            <Link to="/menu" className="text-amber-700 font-bold">
              Brew Your Authentic Coffee
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Home;
