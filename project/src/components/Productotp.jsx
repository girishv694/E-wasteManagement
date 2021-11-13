import { Div } from './Container'
import { Link } from 'react-router-dom'
import '../css/productotp.css'
import { useState, useEffect } from 'react'

export const Productotp = () => {
  const [num5, SetNum5] = useState('')
  console.log(num5)
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

        <Link to='/miniature'>
          <div id='bargain-cont'>Continue</div>
        </Link>
      </Div>
    </>
  )
}
