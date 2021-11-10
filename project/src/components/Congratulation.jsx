//import { Div } from "./Container_"
import "../css/congratulation.css"
import { Link } from "react-router-dom"

import { Div } from "./Container"
const Congratulation = () => {
    return (
        <Div>
            <Link to="/page11">
            <div className="c_img_div">
                <img src="Images/congrats.png" alt="" className="c_img" />
            </div>

            <div id="content_div">
                <h2>Congratulations! </h2>
                <p>You are just one sign up away from us</p>
            </div>
            </Link>
       </Div>
    )
}

export default Congratulation
