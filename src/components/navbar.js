import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <div className="first-sec">
        <div className="logo-link">
          <Link to="/">
            Dream<span> Property</span>
          </Link>
        </div>
        <div className="nav-link">
          <Link to="/">Home</Link>
          <Link to="/property">Property</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="signup-link">
          <Link to="/find">Find a home</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
