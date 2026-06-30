import { Link } from "react-router";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative min-h-screen  pt-24 bg-[url(./assests/hero2.avif)] bg-cover bg-center text-white flex items-center 
    "
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative z-[2] max-w-[650px] text-center">
            <span className="inline-block text-amber-100 font-bold uppercase text-3xl tracking-[1px] mb-4 relative">
              Welcome to Raksha Cafe
            </span>
            <br />
            <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-200">
              <Link to="/menu">Brew Your Authentic Coffee</Link>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
