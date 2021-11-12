import '../css/appointment.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
import { useState, useEffect } from 'react'
export const Appointment = () => {
  const [d, setD] = useState([])
  useEffect(() => {
    let a = []

    for (let i = 1; i < 6; i++) {
      const today = new Date()
      let t1 = new Date()
      t1.setDate(today.getDate() + i)
      // t1 = t1.split(' ')
      a.push(t1)
    }
    setD(a)
    return () => {}
  }, [])
  const today = new Date()
  console.log(typeof today)
  return (
    <>
      <Div>
        <div className='container_mainp5'>
          <div className='Container_p5'>
            <div className='header_p20'>
              <Link to='/bargain' id='#'>
                <h2 className='back_p20'>
                  <img src='Images/backarrow1.svg' alt='' id='arrow' />
                </h2>
              </Link>
              <h1>Appointment</h1>
            </div>
            <div className='block_p20'>
              <div className='header_text_p20'>
                <h6>Please select your proferable pickup date</h6>
              </div>
              <div className='block_cl_p20'>
                <div className='A_p20'>
                  {d.map((e) => {
                    ;<button className=''>
                      <h6>{e}</h6>
                      <h6>25</h6>
                    </button>
                  })}
                  <button className=''>
                    <h6>Monday</h6>
                    <h6>25</h6>
                  </button>
                </div>
              </div>
              <div className='tag_p20'>
                Your availibility on that day
                {/* <h1>Your availabilty on that day</h1> */}
              </div>
              <div className='time_p20'>
                <button className=''>10:00 AM - 01:00PM</button>
                <button className=''>10:00 AM - 01:00PM</button>
                <button className=''>10:00 AM - 01:00PM</button>
              </div>
              <div className='CONT_p20'>
                <Link to='/pickupconfirmation'>
                  <button className='but_p20'>Continue</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Div>
    </>
  )
}
