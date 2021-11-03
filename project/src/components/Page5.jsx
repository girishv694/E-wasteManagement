import '../css/page5.css'
import { Link } from 'react-router-dom'

export const Page5 = () => {
  return (
    <>
      <div className='container_mainp5'>
        <Link to='/page6'>
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
        </Link>
      </div>
    </>
  )
}
