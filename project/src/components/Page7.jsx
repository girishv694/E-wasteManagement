import "../css/page7.css"
import { Link } from 'react-router-dom'
import { Container } from "./Container_sk"
const Page7 = () => {
    return (

        <Container>

            <div id="scrap_sold_img">
                <img src="Images/scrap_sold.png" alt="" />
            </div>

            <div id="heading">
                Scrap Sold
            </div>

            <div id="para_div">
                <p>You will receive your bill according to the negotiations done on the app, and the money will be transferred immediately to your bank account.</p>
            </div>

            <Link id="Link" to="/page8">
                <button id="getStart_btn">
                    Get Started
                </button>
            </Link>
            
        </Container>

    )
}

export default Page7

