import React from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import '../css/page1.css'
import { Div } from './Container'
function Page1() {
    return (
        <div className="header">
            <Link to="/scrap_sold">
                <Div>
                    <img src="Images/page1Image.png" ></img>


                    <div id="heading">
                        SCAVENGER
                    </div>

                    <div id="para">
                        With more scraps comes  more responsibility
                    </div>
=======
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
>>>>>>> 0249b97862b14e6edf775d46f85c83e43609b573

                </Div>

            </Link>
        </div>
    )
}

export default Page1
