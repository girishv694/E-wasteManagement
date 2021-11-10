import {React,useState} from 'react'
import { Link } from 'react-router-dom'
// import"../css/Page.css"
import '../css/page11.css'
import { Div } from './Container'
// Page-3 Pushpendra
function Page11() {
  

  const [Number,setNumber]=useState("");

  const handleNumber=()=>{
    setNumber(<><div>1</div>
    <div>2</div>
    <div>3</div>
    <div>-</div>

    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>++</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>++</div>
    <div>,</div>
    <div>0</div>
    <div>.</div>
    <div>--</div></>)
  }
  return (
    <div className='header'>
      <Link to='/page11'>
        <Div>
          <div className='page11-login'>
            <p clasName='login'>Please Login</p>
            <p className='page11-phone'>Please enter your phone number</p>
          </div>
          <div className='page11-input'>
            <input 
            onClick={handleNumber}
              type='text'
              placeholder='     +91-Mobile Number'
              className='input_p11'
            ></input>
          </div>
          <button className='but_p11'>
            <p>Continue</p>
          </button>
          <div className='grid-container'>{Number}</div>
          
        </Div>
      </Link>
    </div>
  )
}

export { Page11 }
