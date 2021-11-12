import '../css/pickupconformation.css'
import { Link } from 'react-router-dom'

import { CustomerLocation } from "./CustomerLocation"
// let area = CustomerLocation;
import { Div } from './Container'
export const Pickupconformation = () => {
  return (
    <>
      <Div>
        <Link to='/appointment' id='#'>
          <img src='Images/backarrow1.svg' alt='' id='arrow' />
        </Link>

        <div id="pickup-statement">Pickup Confirmation</div>

        <div id="price-detail">
          <div id="noborder">
            <div>
              <p id="left">Get paid</p>
              <p >₹500</p>
            </div>
          </div>
          <div id="noborder">
            <div>
              <p id="left">Scrap item</p>
              <p >AC</p>
            </div>
          </div>
          <div >
            <div>
              <p id="left">Quantity</p>
              <p >1</p>
            </div>
          </div>
        </div>

        <div id="instruct">Any Instructions</div>
        <input type="text" name="" id="" id="instr-input" />

        <div id="pickup-btn">Continue</div>
      </Div>
    </>
  )
}
