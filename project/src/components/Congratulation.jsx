import { Container } from "./Container_sk"
import "../css/congratulation.css"



const Congratulation = () => {
    return (
        <Container>
            <div className="c_img_div">
                <img src="Images/congrats.png" alt="" className="c_img" />
            </div>

            <div id="content_div">
                <h2>Congratulations! </h2>
                <p>You are just one sign up away from us</p>
            </div>
       </Container>
    )
}

export default Congratulation
