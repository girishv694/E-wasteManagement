import { Div } from "./Container";
import { Link } from 'react-router-dom'
import '../css/pickup.css'
import axios from 'axios'
import { useEffect, useState } from "react";
const Pickup = () => {
    const [data, setData] = useState({})
    let n = JSON.parse(localStorage.getItem('appointment_id'))
    useEffect(() => {
        getdata()
    }, [])

    async function getdata() {
        let res = await axios.get(`http://localhost:3002/appointment/${n}`)
        // console.log(res.data);
        setData(res.data)
    }
    return <>
        <Div>
            <Link id="Link" to="/upi">
                <img src="Images/backarrow1.svg" alt="" id="arrow" />
            </Link>

            <br />
            <img src="Images/pickupimg.png" alt="" id="pickimg" />
            <div id="pick-statement">
                We will be coming for your scrap pick up
            </div>
            <div id="userinfo">
                <p id="left">
                {data.date +"  "}
                    { + data.month === 1 ? "January" :
                    data.month === 2 ? "February" : data.month === 3 ? "March" : data.month === 4 ? "April"
                        : data.month === 1 ? "May" : data.month === 1 ? "June" : data.month === 1 ? "July" : data.month === 1 ? "August" :
                            data.month === 1 ? "September" : data.month == 10 ? "October" : data.month === 1 ? "November" : "December"}</p>
           <br />
           <p>Between{" "}{data.time}</p>
               <br />
            </div>
            <Link to="/end">
                <div id="pick-btn">
                    Pickup details
                </div></Link>

        </Div>

    </>
}

export default Pickup