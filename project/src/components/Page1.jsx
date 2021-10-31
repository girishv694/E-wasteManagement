import React from 'react'
import {Link } from 'react-router-dom'
import '../css/page1.css'
import {Div} from './Container'
function Page1() {
    return (
        <div className="header">
 <Link to="/login">
        <Div>
            <img src="Images/page1Image.png" ></img>


            <div id="heading">
                SCAVENGER
            </div>

            <div id="para">
        With more scraps comes  more responsibility
            </div>

      </Div>

    </Link> 
        </div>
    )
}

export default Page1
