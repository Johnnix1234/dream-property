import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="preamble">
      <div className="side1">
        <div className="side2">
          <ul>
            <h2>Hire The Developer</h2>
            <p>List of projects done</p>
            <li>UI crypto Interface</li>
            <li>Phone bills &#38; Payment</li>
            <li>For various Enterpreneurs etc</li>
          </ul>
        </div>
        <div className="side3">
          <ul>
            <h2>Services</h2>
            <li>Get a house</li>
            <li>Advertise your house</li>
            <li>Become an agent</li>
          </ul>
        </div>
        <div className="side4">
          <h2>Community</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/property">Property</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
        <div className="side5">
          <h2>Feedback From Our Users</h2>
          <p className="ptag">
            We would like to hear from our users on how well their experience
            with the website is in order to enable our developer to improve the
            quality
          </p>

          <form>
            <textarea name="" />
            <button type="submit">
              Send <i class="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <hr className="horizontal" />
      <p className="copy">&copy; Ibikunle John 2023</p>
    </div>
  );
};

export default Footer;
