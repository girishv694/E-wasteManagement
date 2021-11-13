import { React } from 'react'
import { Link } from 'react-router-dom'
import '../css/Page.css'
import '../css/page11.css'
import { Div } from './Container'
import { useState, useEffect } from 'react'
const axios = require('axios').default

// Page-3 Pushpendra
function Page11() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(null)
  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)
  const [arbs, setArb] = useState(0)

  async function OTP() {
    const v = JSON.parse(localStorage.getItem('testObject'))
    let arb = Math.floor(Math.random() * 10000)
    setArb(arb)
    setNum(v)
    try {
      console.log('read here')
      //commented to save 50 tries, please use cautiously
      //extra
      const response = await axios.get(`
      http://2factor.in/API/V1/76e0fd80-444c-11ec-a13b-0200cd936042/SMS/${v}/${arb}`)
      // console.log(response)
    } catch (error) {
      console.error(error)
    }
    setShow(!show)
  }

  useEffect(() => {
    OTP()
    return () => {}
  }, [])

  function OTPC() {
    if (arbs === +num1) {
      setShow2(true)
    } else {
      setShow2(false)
    }
  }
  return (
    <>
      <Div>
        <div>
          <Link to='/login'>
            <img
              src='http://localhost:3000/Images/backarrow1.svg'
              alt=''
              id='arrow'
              onClick={() => {
                setShow(false)
              }}
            />
          </Link>
          <div className='page11-login'>
            <p className='login'>Enter OTP</p>
            <p className='page11-phone'>We've sent an OTP on +91 {num}</p>
          </div>
          <div className='page11-input'>
            <input
              onChange={(e) => setNum1(e.target.value)}
              type='text'
              placeholder=' Enter OTP'
              className='input_p1'
              maxLength='4'
              minLength='4'
            ></input>
          </div>
          {show2 == null ? (
            <button className='but_p11' onClick={() => OTPC()}>
              Verify OTP
            </button>
          ) : show2 === true ? (
            <Link to='/ewaste'>
              <div className='but_p11f'>Continue</div>
            </Link>
          ) : (
            <div className='but_p11f'>Please enter correct OTP</div>
          )}
        </div>
      </Div>
    </>
  )
}

export { Page11 }
