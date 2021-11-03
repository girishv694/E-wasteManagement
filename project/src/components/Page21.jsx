import '../css/page21.css'
import { Link } from 'react-router-dom'

export const Page21 = () => {
  return (
    <>
      <div className='container_mainp5'>
        <div className='Container_p5'>
          <div className='header_p21'>
            <Link to='/page20'>
              <h2 className='back_p20'>
                <img src='Images/backarrow1.svg' alt='' />
              </h2>
            </Link>
            <h1>App</h1>
          </div>
          <div className='front_p21'>
            <h1>Pickup Confirmation</h1>
          </div>
          <div className='block_p21'>
            <div className=''>
              <h1>Get paid</h1>
              <h1>550</h1>
            </div>
            <div className=''>
              <h1>Scrap Item</h1>
              <h1>AC</h1>
            </div>
            <div className=''>
              <h1>Quantity</h1>
              <h1>1</h1>
            </div>
          </div>
          <div className='mid_p21'>
            <div className=''>
              <img id='locus_p21' src='Images/location.png' alt='' />
            </div>

            <h3>Receive from Vikas - Mumbai 400008</h3>
            <img src='Images/downarr.png' id='down_p21' alt='' />
          </div>
          <h3 className='intr_p21'>Any Instructions</h3>
          <form action='' className='form_p21'>
            <input type='text' />
          </form>

          <div className='CONT_p21'>
            <Link>
              <button className='but_p21'>Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
