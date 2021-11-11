import { Link } from "react-router-dom"

import { useState } from "react"
import { Div } from "./Container"

import '../css/category.css'
export const Category=()=>{

    const [show,setShow] = useState(false)

    const uploadImg=()=>{
        setShow(!show)
    }
    return <>


<Div>

    <img src="Images/backarrow1.svg" alt="" id="arrow" />
    <div id="categoryDiv">AC</div>

    <div id="selectCategory">
        Select from the category
    </div>

    <div id="priceDiv" >
        <div onClick={uploadImg}>
         <div className="ton">1 Ton</div>
         <div className="tonPrice">₹300/peice</div>
        </div>
        <div onClick={uploadImg}>
       <div className="ton">1.5 Ton</div>
       <div className="tonPrice">₹3000/peice</div>
        </div>
        <div onClick={uploadImg}>
        <div className="ton">1 Ton</div>
        <div className="tonPrice">₹300/peice</div>
        </div>
    </div>

    {
        show?<div className="imgupload" >
        <div><img src="Images/upload.svg" alt="" />  Upload scrap item's image</div>
     </div>:null
    }

    <Link to="/bargain">
    <div className="select"  >
           <div> Not satisfied with the price</div>
        </div></Link>
</Div>




    </>



}