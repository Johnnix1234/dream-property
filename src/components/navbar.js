import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [act, setAct] = useState(1);
  const handleClick = (index) => {
    setAct(index);
  };
  return (
    <div className={act === 1 ? "container" : act === 2 ? "container" : "con"}>
      <div className="first-sec">
        <div className="logo-link">
          <Link to="/">
            Dream<span> Property</span>
          </Link>
        </div>
        <div className="nav-link">
          <NavLink to="/" onClick={() => handleClick(1)}>
            Home
          </NavLink>
          <NavLink to="/property" onClick={() => handleClick(2)}>
            Property
          </NavLink>
          <NavLink to="/about" onClick={() => handleClick(3)}>
            About Us
          </NavLink>
        </div>
        <div className="signup-link">
          <Link to="/post" exact className="inactive">
            Post a home
          </Link>
          <Link>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
