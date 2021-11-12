import { Container } from "./Container_sk"
import "../css/itemcategory.css"
import { Link } from 'react-router-dom'

const Itemcategory = () => {
    return (
        <Container>
            <div id="b_arrow_93">
                <img id="b_arrow_93img" src="Images/back_arrow.png" alt="" />
            </div>

            <div id="ewaste">
                E-Waste
            </div>

            <div className="waste_category" id="top_margin">
                <div className="waste_item">
                    <img src="Images/mbl_frame.png" alt="" className="waste_item_img" />
                    Mobile
                </div>

                <Link id="Link" to="/iteminformation">
                <div className="waste_item">
                    <img src="Images/ac_frame.png" alt="" className="waste_item_img" />
                    AC
                </div>
                </Link>

                <div className="waste_item">
                    <img src="Images/tv_frame.png" alt="" className="waste_item_img" />
                    CRT
                </div>

            </div>

            <div className="waste_category">
                <div className="waste_item">
                    <img src="Images/lcd.png" alt="" className="waste_item_img" />
                    LCD/LED
                </div>

                <div className="waste_item">
                    <img src="Images/printer.png" alt="" className="waste_item_img" />
                    Printer
                </div>

                <div className="waste_item">
                    <img src="Images/battery.png" alt="" className="waste_item_img" />
                    Battery
                </div>

            </div>

            <div className="waste_category">
                <div className="waste_item">
                    <img src="Images/fridge.png" alt="" className="waste_item_img" />
                    Fridge
                </div>

                <div className="waste_item">
                    <img src="Images/w_machine.png" alt="" className="waste_item_img" />
                    Washing Machine
                </div>

                <div className="waste_item">
                    <img src="Images/music.png" alt="" className="waste_item_img" />
                    Music System
                </div>

            </div>

        </Container>
    )
}

export default Itemcategory
