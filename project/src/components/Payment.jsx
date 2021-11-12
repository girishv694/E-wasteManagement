import { Container } from "./Container_sk"
import "../css/payment.css"
import { Link } from 'react-router-dom'
const Payment = () => {
    return (
        <Container>

            <div id="b_arrow_div">
                <img id="b_arrow" src="Images/back_arrow.png" alt="" />
            </div>


            <div id="paradiv">
                Select money acceptance mode
            </div>

            <Link to='/upi' id='#'>
            <div id="div_upi" className="method_display">
                <div>
                    <img className="upi_img" src="Images/upi_logo.png" alt="" />
                </div>
                <div className="payment_para">
                    Get money in the bank account through UPI
                </div>
            </div>
            </Link>

            <div id="div_gpay" className="method_display">
                <div>
                    <img className="gpay_img" src="Images/gpay_logo.png" alt="" />
                </div>
                <div className="payment_para">
                    Get money in the Gpay wallet
                </div>
            </div>

            <div id="div_cash" className="method_display">
                <div>
                    <img className="cash_img" src="Images/cash_logo.png" alt="" />
                </div>
                <div className="payment_para">
                    Get money in cash by our pick up executive
                </div>
            </div>



            <button id="payment_btn">
                Submit
            </button>
        </Container>


    )
}

export default Payment
