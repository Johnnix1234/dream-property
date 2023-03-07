import { NavLink, Link } from "react-router-dom";
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/property">Property</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </div>
        <div className="signup-link">
          <Link to="/find" exact className="inactive">
            Find a home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
