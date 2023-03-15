import { Link } from "react-router-dom";
import HOUSE1 from "../images/house1.jpeg";
// import HOUSE3 from "../images/house3.jpeg";
// import HOUSE4 from "../images/hous4.jpeg";
import HOUSE5 from "../images/house5.jpeg";
import CHECK from "../images/check.jpeg";
import CHECK3 from "../images/check3.jpeg";
import "./About.css";
// import MAN1 from "../images/man1.jpeg";
import MAN2 from "../images/man2.jpeg";
import MAN3 from "../images/man3.jpeg";

const About = () => {
  return (
    <div>
      <div className="start">
        <h2>Why Choose Us</h2>
        <div className="wid1">
          <div className="compo1">
            <i class="fa-solid fa-house-user"></i>
            <h2>Buy a Home</h2>
            <p>
              In need of an Apartment? SignUp now to get exclusive offers on
              house of your choice
            </p>
          </div>
          <div className="compo14">
            <i class="fa-solid fa-house-circle-xmark"></i>
            <h2>Sell a Home</h2>
            <p>
              You feel the need to relocate? sell Your current resident to
              potential buyers
            </p>
          </div>
          <div className="compo15">
            <i class="fa-solid fa-house-flood-water-circle-arrow-right"></i>
            <h2>Rent Home</h2>
            <p>
              Need to stay temporarily at a place? Search to check location best
              suitable for your choice
            </p>
          </div>
          <div className="compo16">
            <i class="fa-solid fa-list-check"></i>
            <h2>List Your Own property</h2>
            <p>
              Post Your house for potential buyers to see what you have in stock
              for them
            </p>
          </div>
        </div>
        <div className="wid2">
          <h2>What's In Neighborhood</h2>
          <p>Explore Below</p>
          <div className="compo5">
            <div className="img2">
              <img src={CHECK} alt="house3" />
            </div>
            <div className="img3">
              <img src={HOUSE1} alt="house1" />
              <h1>A Bedroom Flat</h1>
              <p className="pri">$1200/mo ~ $200000/yr</p>
              <p>
                A full renovated housing estate equipped with supermarkets, gym
                centers, arcade centers, churchs and lots more
              </p>
              <Link>
                View Estates <i class="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="compo13">
            <div className="compo6">
              <div className="head">
                <h2>What Our client Say </h2>
                <h2>About US</h2>
              </div>
              <div className="lin">
                <Link>
                  View More <i class="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>

            <div className="compo8">
              <div className="compo9">
                <div className="compo10">
                  <img src={MAN3} alt="MAN3" />
                </div>
                <div className="compo11">
                  <h2>SAMSON MAXWELL</h2>
                  <p>
                    A well renowned enterpreneur popularly know for promoting,
                    advertising and delivering of products to customers
                  </p>
                  <h3>CEO Asphalt Industries</h3>
                </div>
              </div>
              <div className="compo9">
                <div className="compo10">
                  <img src={MAN2} alt="MAN2" />
                </div>
                <div className="compo11">
                  <h2>JOHN DOE</h2>
                  <p>
                    A Software Analyst aimed at improving tech-world inventions
                    with proven success of over 10000+ projects delivered
                    accurately to customers
                  </p>
                  <h3>CEO Silvertech nig ltd</h3>
                </div>
              </div>
              {/* <div className="compo9">
              <div className="compo10">
                <img src={MAN1} alt="MAN1" />
              </div>
              <div className="compo11">
                <h2>Richard Ederson</h2>
                <p>
                  A good importer and exporter of goods locally and globally all
                  around the globe with efficient rate of 89.9% over the years
                </p>
                <h3>CEO Origin Tech</h3>
              </div>
            </div> */}
            </div>
          </div>
          <div className="compo7">
            <h2>Latest News &#38; Blogs</h2>
            <div className="wi1">
              <div className="co1">
                <img src={CHECK3} alt="house3" />
                <h4>8 Best Affordable House Arrangement</h4>
                <p>
                  Get your house at affordaable prices and rates, Scan through
                  all the houses provided and check for your dream house and the
                  pattern through which the house was set
                </p>
              </div>
              <div className="co2">
                <img src={HOUSE5} alt="House5" />
                <h4>10 best Outdoor Furniture Ideas</h4>
                <Link>Read More</Link>
              </div>
              <div className="co3">
                <img src={HOUSE1} alt="House1" />
                <h4>Top 3 Home Luxury Ideas</h4>
                <Link>Read More</Link>
              </div>
            </div>
          </div>
          <div className="li">
            <Link>View all Blog</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
