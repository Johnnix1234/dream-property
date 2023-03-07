import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="sec1">
      <div className="sec2">
        <h2>Hire The Developer</h2>
        <p>List of projects done</p>
        <p>UI crypto Interface</p>
        <p>Phone bills &#38; Payment</p>
        <p>Cv portfolio For various Enterpreneurs etc</p>
      </div>
      <div className="sec3">
        <h2>Services</h2>
        <p>Get a house</p>
        <p>Advertise your house</p>
        <p>Become an agent</p>
      </div>
      <div className="sec4">
        <h2>Community</h2>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/property">Property</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="sec5">
        <h2>Feedback From Our Users</h2>
        <p>
          We would like to hear from our users on how well their experience with
          the website is in order to enable our developer to improve the quality
        </p>
        <form>
          <textarea name="" />
          <button type="submit">
            Send <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
