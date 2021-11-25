import { Div } from "./Container";
import { Link } from 'react-router-dom'
import '../css/lastpage.css'
const Lastpage=()=>{
    return <>

    <Div>
    <Link to='/pick'>
    <img src="http://localhost:3000/Images/backarrow1.svg" id="arrow" alt="" id="arrow" />
    </Link>
    <div id="last-statement">
    Yay!
Congratulations.
You have contributed in saving our Mother Earth.
    </div>

    </Div>

    </>
}

export default Lastpage