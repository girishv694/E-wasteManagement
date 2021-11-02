import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Page.css'
import { Div } from './Container'
<<<<<<< HEAD
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Crimson+Text" />
function Page1() {
    return (
        <div className="header">
            <Link to="/login">
                <Div>
                    <img src="Images/page1Image.png" alt="home"></img>


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
=======
// PLEASE PUT FONT LINKS ON INDEX.HTML
function Page1() {
  return (
    <div className='header'>
      <Link to='/page2'>
        <Div>
          <div className='firstImg'>
            <img src='Images/page1Image.png' alt='home'></img>
          </div>

          <div id='headers'>
            <img src='Images/SCAVENGER.png' alt='home'></img>
          </div>

          <div id='para'>
            <p>With more scraps comes more responsibility</p>
          </div>
        </Div>
      </Link>
    </div>
  )
>>>>>>> 181893406d76bfca2e2d95ea7d80c5ad006892d5
}

export default Page1
