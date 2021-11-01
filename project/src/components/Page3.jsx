import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Page.css'
import { Div } from './Container'

function Page3() {
  return (
    <div className='header'>
      <Link to='/page3'>
        <Div>
          <img src='Images/page1Image.png' alt='home'></img>

          <div id='headers'>
            <p> AVENGER</p>
          </div>

          <div id='para'>
            <p>With more scraps comes more responsibility</p>
          </div>
        </Div>
      </Link>
    </div>
  )
}

export default Page3