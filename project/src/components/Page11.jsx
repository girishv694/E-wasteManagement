import React from "react";
import { Link } from "react-router-dom";
// import"../css/Page.css"
import "../css/page11.css";
import { Div } from "./Container";
// Page-3 Pushpendra
function Page11() {
  return (
    <div className="header">
      <Link to="/page11">
        <Div>
          <div className="page11-login">
            <p clasName="login">Please Login</p>
            <p className="page11-phone">
                Please 
                 enter your phone number</p>
          </div>
          <div className="page11-input">
              <input type="text" palceholder="+91-Mobile Number"></input>
          </div>
         <button><p>Continue</p></button>
          <div></div>
        </Div>
      </Link>
    </div>
  );
}

export { Page11 };
