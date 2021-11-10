import '../css/page5.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
export const Page5 = () => {
  return (
    <>
    <Link to='/page7'>
      <Div>
      <div className='container_mainp5'>
        
        <div className='Container_p5'>
          <div className='img'>
            <img src='Images/IMGpage5.png' alt='someImage' />
          </div>
          <div className='headerp5'>
            <h1>Choose a date for scrap pickup</h1>
            <p>
              Pick a date that works for you. We will arrive as per your
              convenience.
            </p>
          </div>
          <div className='roller'>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        
      </div>
      </Div>
      </Link>
    </>
  )
}
