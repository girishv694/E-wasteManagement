import { Container } from "./Container_sk"
import "../css/page93.css"


const Page93 = () => {
    return (
        <Container>
            <div id="e-waste">
                <p>E-Waste</p>
            </div>

            <div id="content_div">
                <div>
                    <img className="prod_img" src="Images/mbl_frame.png" alt="" />
                    <p>Mobile</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/ac_frame.png" alt="" />
                    <p>AC</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/tv_frame.png" alt="" />
                    <p>CRT</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/lcd.png" alt="" />
                    <p>LCD/LED</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/battery.png" alt="" />
                    <p>Battery</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/fridge.png" alt="" />
                    <p>Fridge</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/w_machine.png" alt="" />
                    <p>Washing</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/music.png" alt="" />
                    <p>Music</p>
                </div>
               
                <div>
                    <img className="prod_img" src="Images/printer.png" alt="" />
                    <p>Printer</p>
                </div>
               
            </div>
       </Container>
    )
}

export default Page93
