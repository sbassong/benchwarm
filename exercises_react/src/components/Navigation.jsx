import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <div className="nav-logo">
          <Link to="/">
            <img
              src={logo}
              alt="Generic with tagline: cs-290, sourced from Figma"
              className="nav-img"
            />
          </Link>
        </div>
        <div className="header-disclaimer">
          <h1>BenchWarm</h1>
          <p>The app that helps you keep track of your workout regime.</p>
        </div>
      </div>
      <div className="nav-link-container">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/create">
          Add&nbsp;exercise
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
