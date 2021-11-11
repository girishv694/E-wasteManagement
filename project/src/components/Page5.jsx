import '../css/page5.css'
import { Container } from "./Container_sk"
import { Link } from 'react-router-dom'
import { Div } from './Container'
export const Page5 = () => {
  return (
    <>
    <Link to='/scrapesold'>
      <Div>
      <div className='container_mainp5'>
        
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
      </Div>
      </Link>
    </>
  )
}
