import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">
          <span>Raksha Cafe</span>
        </Link>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
      </div>
    </nav>
  );
}

export default Navbar;
