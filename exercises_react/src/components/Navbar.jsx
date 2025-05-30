import { Link } from "react-router-dom";
import logo from "../assets/CS-290-logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img
            src={logo}
            alt="Generic with tagline: cs-290, sourced from Figma"
            className="nav-img"
          />
        </Link>
      </div>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/create">
          New exercise
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
