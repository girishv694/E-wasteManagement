import { Div } from "./Container";
import { Link } from 'react-router-dom'
import '../css/pickup.css'
const Pickup = () => {
    return <>
        <Div>
            <Link id="Link" to="/upi">
                <img src="Images/backarrow1.svg" alt="" id="arrow" />
            </Link>

            <br />
            <img src="Images/pickupimg.png" alt="" id="pickimg" />
            <div id="pick-statement">
                We will be coming for your scrap pick up
            </div>

           <Link to="/end">
           <div id="pick-btn">
                Pickup details
            </div></Link>

        </Div>

    </>
}

export default Pickup