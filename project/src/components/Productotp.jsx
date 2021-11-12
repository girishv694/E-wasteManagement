import { Div } from "./Container";
import { Link } from "react-router-dom";
import '../css/productotp.css'
export const Productotp=()=>{
    return <>
    <Div>

    <Link to='/pickupconfirmation' id='#'>
          <img src='Images/backarrow1.svg' alt='' id='arrow' />
        </Link>

        <div id="pickup-statement">Pickup Confirmation</div>

        <div id="otpcont">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />

            <p id="otppara">We have sent  OTP to your mobile number</p>
            <br />
           
            <p id="otppara">Resend OTP in 25 seconds</p>
           
            <br />
            <p id="otppara">Show the OTP to pickup executive while selling scrap</p>
        </div>

        <Link to='/miniature'>
          <div id='bargain-cont'>Continue</div>
        </Link>
    </Div>

    </>
}