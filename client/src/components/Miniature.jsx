import '../css/miniature.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
const Miniature = () => {
    return <>
        <Div>

            <Link to='/productotp'>
                <img src="http://localhost:3000/Images/backarrow1.svg" alt="" id="arrow" />
            </Link>
            <div id="statement">
                Do you want to a Memorabilia miniature of the sold item
            </div>

            <div id="btn-cont">

                <div>
                    <Link to='/payment' style={{ color: "#292D32" }}>
                        Yes
                    </Link>
                </div>

                <div>No</div>

            </div>

            <div id="img-cont">
                <div>
                    <img src="http://localhost:3000/Images/clayimg1.png" alt="" />
                </div>
                <div>
                    <img src="http://localhost:3000/Images/clayimg2.png" alt="" />
                </div>
                <div>
                    <img src="http://localhost:3000/Images/clayimg3.png" alt="" />
                </div>

                <p>We charge only Rs 50 for this service</p>
            </div>

           <Link to="/payment">
           <button id="cont-btn">Countinue</button></Link>

        </Div>


    </>


}

export default Miniature