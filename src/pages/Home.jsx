import { Link } from "react-router";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header
        className="relative bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&auto=format&fit=crop')] bg-cover bg-center text-white pt-[160px] pb-[140px] flex items-center overflow-hidden h-full w-full
    "
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative z-[2] max-w-[650px] text-center">
            <span className="inline-block text-white font-bold uppercase text-sm tracking-[1px] mb-4 relative">
              Welcome to Raksha Cafe
            </span>
            <br />
            <button className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors duration-200">
              <Link to="/menu">Brew Your Authentic Coffee</Link>
            </button>
          </div>
        </div>
      </header>
      <div className="container sm:bg-amber-500 md:bg-amber-600">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          qui, praesentium, numquam ea quasi minus minima repellendus voluptate
          vero, odio eligendi velit nostrum possimus impedit inventore quam
          perspiciatis deserunt accusamus quibusdam tenetur assumenda?
          Repellendus quasi rem architecto quas recusandae necessitatibus illo
          molestiae reprehenderit voluptate aspernatur non soluta nemo
          perferendis ratione amet quae, nobis consequatur, consequuntur esse
          doloribus hic. Optio numquam neque nesciunt vel necessitatibus
          pariatur repellendus, omnis eius quidem fugiat ducimus vitae ex animi
          praesentium illum assumenda tempore veritatis quisquam! Accusantium,
          porro in fugit omnis id deleniti dignissimos minima consequatur,
          quibusdam quis exercitationem mollitia ullam? Tempora repellendus vero
          asperiores alias.
        </p>
      </div>
    </div>
  );
}

export default Home;
