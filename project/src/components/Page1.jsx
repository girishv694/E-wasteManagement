import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Page.css'
import { Div } from './Container'
// PLEASE PUT FONT LINKS ON INDEX.HTML
function Page1() {
  return (
    <div className='header'>
      <Link to='/login'>
        <Div>
          <img src='Images/page1Image.png' alt='home'></img>

          <div id='headers'>
            <p> SCAVENGER</p>
          </div>

          <div id='para'>
            <p>With more scraps comes more responsibility</p>
          </div>
        </Div>
      </Link>
    </div>
  )
}

export default Page1
