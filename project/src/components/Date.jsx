import '../css/date.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
import { useState } from 'react'
export const Date = () => {
  const [show, setShow] = useState(false)
  return (
    <>

      <Div>
        {
          show ? <Link to="/scrapesold">
          
          <div className='container_mainp5'>

            <div className='headerp5'>
              <div className='img'>
                <img src='Images/pickupboy.png' alt='someImage' />
              </div>

              <h1>Pickup boys will arrive at your home</h1>


              <p>
                Our pickup executives will call you as soon as the nearest executive is located.
                They will bring an electronic machine to weigh each scrap item separately.


              </p>
              <br />
              <p>The pickup executives are trained professionally to handle any kind of waste</p>

            </div>

          </div>
          
          
          
          </Link> :
            <div className='container_mainp5' onClick={() => {
              setShow(true)
            }}>

              <div className='headerp5'>
                <div className='img'>
                  <img src='Images/IMGpage5.png' alt='someImage' />
                </div>

                <h1>Choose a date for scrap pickup</h1>


                <p>
                  Pick a date that works for you. We will arrive as per your
                  convenience.
                </p>

                <div className='roller'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

            </div>
        }
      </Div>

    </>
  )
}
