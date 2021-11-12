import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import { Div } from './Container'
function Home() {
    return (

        <Link to="/language">
            <Div>
                <div id="container">
                    <div>
                        <div>
                            <img src="Images/page1Image.png" alt="" ></img>

                        </div>

                        <div id="heading">
                            <p>SCAVENGER</p>
                        </div>

                        <div id="para">
                            <p> With more scraps comes  more responsibility</p>
                        </div>

                    </div>
                </div>
            </Div>
        </Link>

    )
}

export default Home
