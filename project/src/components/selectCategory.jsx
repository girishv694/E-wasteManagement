

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
    <div id="categoryDiv">AC</div>

    <div id="selectCategory">
        Select from the category
    </div>

    <div id="priceDiv">
        <div>
         <div className="ton">1 Ton</div>
         <div className="tonPrice">₹300/peice</div>
        </div>
        <div>
       <div className="ton">1.5 Ton</div>
       <div className="tonPrice">₹3000/peice</div>
        </div>
        <div>
        <div className="ton">1 Ton</div>
        <div className="tonPrice">₹300/peice</div>
        </div>
    </div>

    {
        show?<div className="imgupload" >
        <div>Upload scrap item's image</div>
     </div>:null
    }

    <div className="select" onClick={uploadImg} >
           <div> Not satisfied with the price</div>
        </div>
</Div>




    </>



}