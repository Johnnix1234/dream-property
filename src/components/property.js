import { Link } from "react-router-dom";
import Data2 from "./data2";
import GIF1 from "../images/gif2.gif";
import "./property.css";
import { useState } from "react";

const Property = () => {
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    setFav(!fav);
  };
  return (
    <div className="parent">
      <div className="f1">
        <div className="f-2">
          <div className="f-1">
            <h2>Search House to Buy</h2>
            <div className="ff1">
              <input type="text" placeholder="Search House" />
              <span>
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>

          <div className="f0">
            <form>
              <div className="input-contai">
                <input type="text" placeholder="Location" />
                <span>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
              </div>
              <div className="input-contai">
                <input type="text" placeholder="Property Type" />
                <span>
                  <i class="fa-solid fa-house"></i>
                </span>
              </div>
              <div className="input-contai">
                <input type="text" placeholder="Budget" />
                <span>
                  <i class="fa-solid fa-sack-dollar"></i>
                </span>
              </div>
              <div className="input-contai">
                <input type="button" value="Search Home" />
              </div>
            </form>
          </div>
        </div>
        <div className="ff2">
          {Data2.map(({ id, image, w2, w1, w3, w4, w5, label, firsttext }) => {
            return (
              <div key={id} className="fi1">
                <Link>
                  <figure className="fir1" label={label}>
                    <img src={image} alt="" className="img12" />
                  </figure>
                </Link>
                <div className="fir2">
                  <h3>{w1}</h3>
                  <span onClick={handleFav} className={fav ? "yellow" : "grey"}>
                    <i class="fa-sharp fa-solid fa-heart"></i>
                  </span>
                </div>
                <h2>{w2}</h2>
                <p>{firsttext}</p>
                <div className="fir3">
                  <div className="fir31">
                    <span>
                      <i class="fa-solid fa-bed"></i>
                    </span>
                    <p>{w3}</p>
                  </div>
                  <div className="fir32">
                    <span>
                      <i class="fa-solid fa-bath"></i>
                    </span>
                    <p>{w4}</p>
                  </div>
                  <div className="fir33">
                    <span>
                      <i class="fa-solid fa-shapes"></i>
                    </span>
                    <p>{w5}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <img src={GIF1} alt="ieiei" />
      </div>
    </div>
  );
};

export default Property;
