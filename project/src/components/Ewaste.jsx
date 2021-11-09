import { Container } from "./Container_sk"
import "../css/e_waste.css"

const Ewaste = () => {
    return (
        <Container>
            <div id="top_bar">
                <div id="city_name">
                    <label id="cityname_label">Your City</label>
                    <select name="city_name" id="city_select">
                        <option value="">Mumbai</option>
                        <option value="">Pune</option>
                        <option value="">Delhi</option>
                        <option value="">Hyderabad</option>
                        <option value="">Bangalore</option>
                        <option value="">Kolkata</option>
                        <option value="">Chennai</option>
                    </select>
                </div>

                <div id="img_div">
                    <img id="trans_img" src="Images/translate_Icons.png" alt="" />
                </div>

            </div>

            <div id="inp_div">
                <button id="search_btn"><img id="search_img" src="Images/search_Icons.png" alt="" /></button>
                <input id="search_inp" type="text" placeholder="What you want to sell?" />
            </div>


            <div id="first_row">
                <div className="waste_div">
                    <img className="waste_img" src="Images/E-waste.png" alt="" />
                    <p>E-waste</p>
                </div>
                <div className="waste_div">
                <img className="waste_img" src="Images/med-waste.png" alt="" />
                    <p>Medical-waste</p>
                </div>
            </div>

            <div id="second_row">
                <div className="waste_div">
                <img className="waste_img" src="Images/data-waste.png" alt="" />
                    <p>Data-centre E-waste</p>
                </div>
                <div className="waste_div">
                <img className="waste_img" src="Images/metal-waste.png" alt="" />
                    <p>Metal-waste</p>
                </div>
            </div>

            <div id="third_row">
                <div className="waste_div">
                    <p>Sell</p>
                </div>
                <div className="waste_div">
                    <p>Rate List</p>
                </div>
            </div>





            <div id="bottom_bar">
                <div>
                    <img className="bottom_img" src="Images/home151.png" alt="" />
                    <p className="bottom_p">Home</p>
                </div>
                <div>
                    <img className="bottom_img" src="Images/feed151.png" alt="" />
                    <p className="bottom_p">Feed</p>
                </div>
                <div>
                    <img className="bottom_img" src="Images/voice151.png" alt="" />
                    <p className="bottom_p">Voice</p>
                </div>
                <div>
                    <img className="bottom_img" src="Images/profile151.png" alt="" />
                    <p className="bottom_p">Profile</p>
                </div>

            </div>






        </Container>
    )
}

export default Ewaste
