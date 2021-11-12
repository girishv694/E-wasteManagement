//import { Div } from "./Container_"
import "../css/congratulation.css"
import { Link } from "react-router-dom"

import { Div } from "./Container"
const Congratulation = () => {
    return (
        <Div>
            <Link to="/register">
            <div className="c_img_div">
                <img src="Images/congrats.png" alt="" className="c_img" />
            </div>

            <div id="content_div">
                <h2>Congratulations! </h2>
                <h3>You are just one sign up away from us</h3>
            </div>
            </Link>
       </Div>
    )
}

export default Congratulation
