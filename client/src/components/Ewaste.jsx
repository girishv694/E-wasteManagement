import { Container } from './Container_sk'
import '../css/e_waste.css'
import { Link } from 'react-router-dom'
import { CustomerLocation } from './CustomerLocation'

const Ewaste = () => {
  return (
    <Container>
      <div id='top_bar'>
        <div id='city_name'>
          <label id='cityname_label'>Your City</label>
          <p name='city_name' id='city_select'>
            <CustomerLocation />
          </p>
        </div>

        <div id='img_div'>
          <img id='trans_img' src='Images/translate_Icons.png' alt='' />
        </div>
      </div>

      <div id='inp_div'>
        <button id='search_btn'>
          <img id='search_img' src='Images/search_Icons.png' alt='' />
        </button>
        <input
          id='search_inp'
          type='text'
          placeholder='What you want to sell?'
        />
      </div>

      <div id='first_row'>
        <Link
          to='/itemcategory'
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <div className='waste_div'>
            <img className='waste_img' src='Images/E-waste.png' alt='' />
            <h3 className='ww'>E-waste</h3>
          </div>
        </Link>

        <div className='waste_div'>
          <img className='waste_img' src='Images/med-waste.png' alt='' />
          <h3 className='ww'>Medical-waste</h3>
        </div>
      </div>

      <div id='second_row'>
        <div className='waste_div'>
          <img className='waste_img' src='Images/data-waste.png' alt='' />
          <h3 className='ww'>Data-centre E-waste</h3>
        </div>
        <div className='waste_div'>
          <img className='waste_img' src='Images/metal-waste.png' alt='' />
          <h3 className='ww'>Metal-waste</h3>
        </div>
      </div>

      <div id='third_row'>
        <div className='waste_div_e'>
          <p>Sell</p>
        </div>
        <div className='waste_div_e'>
          <p>Rate List</p>
        </div>
      </div>

      <div id='bottom_bar'>
        <div className='bottom_divs'>
          <img className='bottom_img' src='Images/home151.png' alt='' />
          Home
        </div>
        <div className='bottom_divs'>
          <img className='bottom_img' src='Images/feed151.png' alt='' />
          Feed
        </div>
        <div className='bottom_divs'>
          <img className='bottom_img' src='Images/voice151.png' alt='' />
          Voice
        </div>
        <div className='bottom_divs'>
          <img className='bottom_img' src='Images/profile151.png' alt='' />
          Profile
        </div>
      </div>
    </Container>
  )
}

export default Ewaste
