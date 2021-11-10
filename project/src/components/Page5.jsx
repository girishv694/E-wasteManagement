import '../css/page5.css'
import { Container } from "./Container_sk"
import { Link } from 'react-router-dom'

export const Page5 = () => {
  return (
    <>

      <Link to='/pick'>
        <Container>
          <div className='img_div'>
            <img src='Images/IMGpage5.png' alt='someImage' />
          </div>
          <div id='heading_date'>
            Choose a date for scrap pickup
          </div>
          
          <div id='para_div'>
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
        </Container>
      </Link>

    </>
  )
}
