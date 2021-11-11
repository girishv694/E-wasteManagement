import { React } from 'react'
import { Link } from 'react-router-dom'
import "../css/Page.css"
import '../css/page11.css'
import { Div } from './Container'
import { useState } from 'react'
// Page-3 Pushpendra
function Page11() {
  const [show, setShow] = useState(false)
  return (


    <Div>
      <div >
        <img src="http://localhost:3000/Images/backarrow1.svg" alt="" id="arrow" />

        <div className='page11-login'>
          <p clasName='login'>Please Login</p>
          <p className='page11-phone'>Please enter your phone number</p>
        </div>
        <div className='page11-input'>
          <input onFocus={() => {
            setShow(true)
          }}
            type='text'
            placeholder='     +91-Mobile Number'
            className='input_p11'
          ></input>
        </div>
        <Link to='/ewaste'>
          <button className='but_p11'>
            <p>Continue</p>
          </button>
        </Link>
        <div className='grid-container' id={show ? "disp" : ""}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div id="blue">-</div>

          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div id="blue">+</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div id="blue">*</div>
          <div>,</div>
          <div>0</div>
          <div>/</div>
          <div id="blue"></div>
        </div>

      </div>
    </Div>

  )
}

export { Page11 }
