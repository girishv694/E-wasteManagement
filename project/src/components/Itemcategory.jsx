import { Container } from "./Container_sk"
import "../css/itemcategory.css"
import { Link } from 'react-router-dom'
import { useState,useEffect } from "react"
import { Div } from "./Container"
import axios from "axios"
const Itemcategory = () => {

    const [show1,setShow1]=useState(true)
    const [show, setShow] = useState(false)
    const [data,setData]=useState([])
    const [param,setParam] =useState()
   
  async function getdata(){
    let res=await axios.get(`http://localhost:4000/${param}`)
  
    setData(res.data)
  }
  
    useEffect(()=>{
       getdata()
    },[param])
  
    const uploadImg = () => {
      setShow(!show)
    }
  
    function onFileChange(event) {
      const formData = new FormData()
      formData.append('image_urls', event.target.files[0])
      axios.post('http://localhost:3001/products/img', formData)
    }
    return <>
       { show1? <Container >
            <Link to="/ewaste">
            <div id="b_arrow_93">
                <img id="b_arrow_93img" src="Images/back_arrow.png" alt="" />
            </div></Link>

            <div id="ewaste">
                E-Waste
            </div>

            <div className="waste_category" id="top_margin">
                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Mobile")
       }}>
                    <img src="Images/mbl_frame.png" alt="" className="waste_item_img" />
                    Mobile
                </div>

                {/* <Link id="Link" to="/iteminformation/AC"> */}
                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("AC")
       }}>
                    <img src="Images/ac_frame.png" alt="" className="waste_item_img" />
                    AC
                </div>
                {/* </Link> */}

                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("CRT")
       }}>
                    <img src="Images/tv_frame.png" alt="" className="waste_item_img" />
                    CRT
                </div>

            </div>

            <div className="waste_category">
                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("LCD/LED")
       }}>
                    <img src="Images/lcd.png" alt="" className="waste_item_img" />
                    LCD/LED
                </div>

                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Printer")
       }}>
                    <img src="Images/printer.png" alt="" className="waste_item_img" />
                    Printer
                </div>

                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Battery")
       }}>
                    <img src="Images/battery.png" alt="" className="waste_item_img" />
                    Battery
                </div>

            </div>

            <div className="waste_category">
                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Fridge")
       }}>
                    <img src="Images/fridge.png" alt="" className="waste_item_img" />
                    Fridge
                </div>

                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Washing-Machine")
       }}>
                    <img src="Images/w_machine.png" alt="" className="waste_item_img" />
                    Washing Machine
                </div>

                <div className="waste_item" onClick={()=>{
           setShow1(false)
           setParam("Music System")
       }}>
                    <img src="Images/music.png" alt="" className="waste_item_img" />
                    Music System
                </div>

            </div>

        </Container>:
         <Div>
         <img src='Images/backarrow1.svg' alt='' id='arrow' onClick={()=>{
             setShow1(true)
         }}/>
         <div id='categoryDiv'>{param}</div>
 
         <div id='selectCategory'>Select from the category</div>
 
          <div id='priceDiv'>
         {
           data.map((el)=>{
             return  <div onClick={uploadImg}>
             <div className='ton'>{el.type}</div>
             <div className='tonPrice'>{el.price}</div>
           </div>
 
             
           })
         }
         </div>
          
        
 
         {/* <img src='Images/upload.svg' alt='' /> Upload scrap item's image */}
         {show ? (
           <div className='imgupload'>
             <img src="Images/upload1.png" alt="" id="upload_icon" />
             <input
               class='custom-file-input'
               type='file'
               encType='multipart/form-data'
               id='fileupload'
               name='fileupload'
               onChange={(e) => onFileChange(e)}
             />
           </div>
         ) : null}
 
         <Link to='/bargain'>
           <div className='select'>
             <div> Not satisfied with the price</div>
           </div>
         </Link>
       </Div>}
    </>
}

export default Itemcategory
