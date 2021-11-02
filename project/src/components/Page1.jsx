import React from 'react'
import { Link } from 'react-router-dom'
import '../css/page1.css'

function Page1() {
    return (
        <div className="header">
            <Link to="/scrap_sold">
                <div id="container">
             <div>
             <img src="Images/page1Image.png" ></img>

             </div>

                    <div id="heading">
                        <p>SCAVENGER</p>
                    </div>

                    <div id="para">
                       <p> With more scraps comes  more responsibility</p>
                    </div>

                    </div>

            </Link>
        </div>
    )
}

export default Page1
