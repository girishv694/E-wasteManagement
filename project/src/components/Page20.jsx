import '../css/Page20.css'
import { Link } from 'react-router-dom'

export const Page20 = () => {
  return (
    <>
      <div className='container_mainp5'>
        <div className='Container_p5'>
          <div className='header_p20'>
            <Link>
              <h2>A</h2>
            </Link>
            <h1>Appointment</h1>
          </div>
          <div className='block_p20'>
            <div className='header_text_p20'>
              <h6>Please select your proferable pickup date</h6>
            </div>
            <div className='block_cl_p20'>
              <div className='A_p20'>
                <button className=''>
                  <h6>Monday</h6>
                  <h6>25</h6>
                </button>
                <button className=''>
                  <h6>Monday</h6>
                  <h6>25</h6>
                </button>
                <button className=''>
                  <h6>Monday</h6>
                  <h6>25</h6>
                </button>
              </div>
              <div className='B_p20'>
                <button className=''>
                  <h6>Monday</h6>
                  <h6>25</h6>
                </button>
                <button className=''>
                  <h6>Monday</h6>
                  <h6>25</h6>
                </button>
              </div>
            </div>
            <div className='tag_p20'>
              <h1>Your availabilty on that day</h1>
            </div>
            <div className='time_p20'>
              <button className=''>10:00 AM - 01:00PM</button>
              <button className=''>10:00 AM - 01:00PM</button>
              <button className=''>10:00 AM - 01:00PM</button>
            </div>
            <div className='CONT_p20'>
              <Link>
                <button className='but_p20'>Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
