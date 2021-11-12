import { Div } from "./Container";
import '../css/upiaddress.css'
import { Link } from 'react-router-dom'
import {Forms} from './Form'
const Upi=()=>{
    return <>

        <Div>
            
        <Link to='/payment'>
        <img src="http://localhost:3000/Images/backarrow1.svg" alt="" id="arrow" />
        </Link>

        <div id="formdiv">
        <Forms>
            <input type="text" placeholder="Enter UPI Address"/>
            <input type="text" placeholder="Confirm Upi Address" />
        </Forms>
        </div>
        
        <Link to="pick"><div id="upisubmit">Submit</div></Link>
        </Div>

    </>
}

export default Upi