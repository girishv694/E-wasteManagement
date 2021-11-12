import { useState, useEffect } from 'react'
import { Div } from './Container'
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../css/iteminformation.css'
export const Iteminformation = () => {
  const [show, setShow] = useState(false)
  const [data,setData]=useState([])
 
async function getdata(){
  let res=await axios.get("http://localhost:4000/AC")

  setData(res.data)
}

  useEffect(()=>{
     getdata()
  },[])

  const uploadImg = () => {
    setShow(!show)
  }

  function onFileChange(event) {
    const formData = new FormData()
    formData.append('image_urls', event.target.files[0])
    axios.post('http://localhost:3001/products/img', formData)
  }

  return (
    <>
      <Div>
        <Link to='/itemcategory' id='#'>
          <img src='Images/backarrow1.svg' alt='' id='arrow' />
        </Link>
        <div id='categoryDiv'>AC</div>

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
      </Div>
    </>
  )
}
