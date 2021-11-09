import React from 'react'
import { Link } from 'react-router-dom'
import '../css/page1.css'
import { Container } from './Container_sk'
function Page1() {
    return (

        // <Link to="/page2">
            <Container>
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
            </Container>
        // </Link>

    )
}

export default Page1
