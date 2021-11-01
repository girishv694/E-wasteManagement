import React from 'react'
import {Link } from 'react-router-dom'
import '../css/Page.css'
import {Div} from './Container'
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Crimson+Text" />
function Page1() {
    return (
        <div className="header">
 <Link to="/login">
        <Div>
            <img src="Images/page1Image.png"  alt="home"></img>


            <div id="heading">
               <p> SCAVENGER</p>
            </div>

            <div id="para">
        <p>With more scraps comes  more responsibility</p>
            </div>

                </Div>

            </Link>
        </div>
    )
}

export default Page1
