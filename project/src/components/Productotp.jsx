import { Div } from './Container'
import { Link } from 'react-router-dom'
import '../css/productotp.css'
import { useState, useEffect } from 'react'
const axios = require('axios').default

export const Productotp = () => {
  const [num5, SetNum5] = useState('')
  const [arbs, setArb] = useState(0)
  const [bl, setBl] = useState(false)
  const v = JSON.parse(localStorage.getItem('testObject'))

  async function ot() {
    let arb = Math.floor(Math.random() * 10000)
    setArb(arb)
    try {
      console.log('read here')
      // commented to save 50 tries, please use cautiously
      // extra
      const response = await axios.get(`
      http://2factor.in/API/V1/76e0fd80-444c-11ec-a13b-0200cd936042/SMS/${v}/${arb}`)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    ot()
    return () => {}
  }, [])

  function test() {
    if (+num5 == arbs) {
      setBl(true)
    } else {
      setBl(null)
      console.log('try again')
    }
  }

  return (
    <>
      <Div>
        <Link to='/pickupconfirmation' id='#'>
          <img src='Images/backarrow1.svg' alt='' id='arrow' />
        </Link>

        <div id='pickup-statement'>Pickup Confirmation</div>

        <div id='otpcont'>
          <div className='mb-6 text-center'>
            <div id='otp' className='flex justify-center'>
              <input
                className='m-2 text-center form-control form-control-solid rounded focus:border-rgb(65, 200, 183)-400 focus:shadow-outline'
                type='text'
                id='first'
                maxlength='1'
                onChange={(e) => {
                  SetNum5(num5 + e.target.value)
                }}
              />
              <input
                className='m-2 text-center form-control form-control-solid rounded focus:border-rgb(65, 200, 183)-400 focus:shadow-outline'
                type='text'
                id='second'
                maxlength='1'
                onChange={(e) => {
                  SetNum5(num5 + e.target.value)
                }}
              />
              <input
                className='m-2 text-center form-control form-control-solid rounded focus:border-rgb(65, 200, 183)-400 focus:shadow-outline'
                type='text'
                id='third'
                maxlength='1'
                onChange={(e) => {
                  SetNum5(num5 + e.target.value)
                }}
              />
              <input
                className='m-2 text-center form-control form-control-solid rounded focus:border-rgb(65, 200, 183)-400 focus:shadow-outline'
                type='text'
                id='fourth'
                maxlength='1'
                onChange={(e) => {
                  SetNum5(num5 + e.target.value)
                }}
              />
            </div>
          </div>

          <p id='otppara'>We have sent OTP to your mobile number</p>
          <br />

          <p id='otppara'>Resend OTP in 25 seconds</p>

          <br />
          <p id='otppara'>
            Show the OTP to pickup executive while selling scrap
          </p>
        </div>
        {!bl ? (
          <div
            id='bargain-cont'
            onClick={() => {
              test()
            }}
          >
            Check
          </div>
        ) : (
          <Link to='/miniature'>
            <div id='bargain-cont'>Continue</div>
          </Link>
        )}
      </Div>
    </>
  )
}
