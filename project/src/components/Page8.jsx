// import { Link } from 'react-router-dom'
import { Container } from "./Container_sk"
import "../css/page8.css"

const Page8 = () => {
    return (
        <Container>
            <div id="page8_div">
                <div className="loc_icon">
                    <img className="loc_icon" src="Images/location_icon.png" alt="" />
                </div>
                <div id="page8_content1">
                    Allow SCAVENGER to access this device’s location?
                </div>

                <div id="page8_content2">
                    Allow only while using the app
                </div>

                <div id="page8_content3">
                    Deny
                </div>
            </div>
        </Container>
    )
}

export default Page8
