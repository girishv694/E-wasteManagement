import React from "react";
import { Link } from "react-router-dom";
// import"../css/Page.css"
import "../css/page3.css";
import { Div } from "./Container";
// Page-3 Pushpendra
function Page3() {
  return (
    <Link to="/page5">
        <Div>
    <div className="header">
      
          <div className="page3-img">
            <img src="Images/page-3.png" alt="Page"></img>
            <div className="page3-sell">

              <p> Sell scrap items in 3 easy steps</p>
            </div>

            <div className="page3-junkyard">

              <p>If your home is becoming a junkyard filled with products that have
                gathered tonnes of dust over time, you need not look any further.</p>
            </div>
            <div className="page3-waste">
              <p>We collect metals, electronic waste, machines and plastics</p></div>
            <div className='rollers'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

<<<<<<< HEAD

        </Div>
      </Link>
=======
       
>>>>>>> 5f47eb4099ea75cd6d7ccdb52e6d52321541ea77
    </div>
      
    </Div>
      </Link>
  );
}

export default Page3;
