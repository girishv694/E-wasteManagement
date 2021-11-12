import React from "react";
import { Link } from "react-router-dom";
// import"../css/Page.css"
import "../css/scrapeitem.css";
import { Div } from "./Container";
// Page-3 Pushpendra
function ScrapeItem() {
  return (
    <Link to="/date">
      <Div>
        <div >

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
            <div className='rollers_p1'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

        </div>

      </Div>
    </Link>
  );
}

export default ScrapeItem;
