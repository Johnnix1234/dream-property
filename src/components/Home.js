import "./Home.css";
import { Link } from "react-router-dom";
import Data from "./data";
const Home = () => {
  return (
    <div>
      <div className="widg1">
        <div className="comp1">
          <h2>
            Lets Find You Dream
            <span>
              House <i class="fa-solid fa-house"></i>
            </span>
          </h2>
          <h2>Which is perfect for you</h2>
        </div>
        <div className="comp2">
          <p>Want To Find A Home? We Are Ready To help You Find</p>
          <p className="comp22">One That Suits Your Lifestyle And Need</p>
        </div>
        <div className="comp3">
          <Link>
            Get Started <i class="fa-solid fa-circle-arrow-right"></i>
          </Link>
        </div>
        <div className="comp4">
          <div>
            <p className="numbers">1000+</p>
            <p>Listed Properties</p>
          </div>
          <div>
            <p className="numbers">3400+</p>
            <p>Happy customers</p>
          </div>
          <div>
            <p className="numbers">120+</p>
            <p>Awards</p>
          </div>
        </div>
        <div className="comp5">
          <h3>Search for Available Properties</h3>
          <form>
            <div className="input-container">
              <input type="text" placeholder="Location" />
              <span>
                <i class="fa-solid fa-location-dot"></i>
              </span>
            </div>
            <div className="input-container">
              <input type="text" placeholder="Property Type" />
              <span>
                <i class="fa-solid fa-house"></i>
              </span>
            </div>
            <div className="input-container">
              <input type="text" placeholder="Budget" />
              <span>
                <i class="fa-solid fa-sack-dollar"></i>
              </span>
            </div>
            <div className="input-container">
              <input type="button" value="Search Home" />
            </div>
          </form>
        </div>
      </div>
      <div className="widg2">
        <div className="comp6">
          <h2>Our Popular Homes</h2>
          <Link>Explore all</Link>
        </div>
        <div className="comp7">
          {Data.map(({ id, image, firsttext, p1, p2, p3, p4 }) => {
            return (
              <div key={id} className="subcom1">
                <img src={image} alt="" />
                <h2>{firsttext}</h2>
                <div className="subsubcom1">
                  <p>{p1}</p>
                  <p>{p2}</p>
                  <p>{p3}</p>
                </div>
                <div className="subsubcom2">
                  <button>
                    Book now <i class="fa-solid fa-pen-nib"></i>
                  </button>
                  <h3>{p4}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
