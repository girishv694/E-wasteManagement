import '../css/page5.css'
import { Container } from "./Container_sk"
import { Link } from 'react-router-dom'
import { Div } from './Container'
export const Page5 = () => {
  return (
    <>
<<<<<<< HEAD

      <Link to='/pick'>
        <Container>
          <div className='img_div'>
=======
    <Link to='/page7'>
      <Div>
      <div className='container_mainp5'>
        
        <div className='Container_p5'>
          <div className='img'>
>>>>>>> 5f47eb4099ea75cd6d7ccdb52e6d52321541ea77
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
<<<<<<< HEAD
        </Container>
      </Link>

=======
        </div>
        
      </div>
      </Div>
      </Link>
>>>>>>> 5f47eb4099ea75cd6d7ccdb52e6d52321541ea77
    </>
  )
}
