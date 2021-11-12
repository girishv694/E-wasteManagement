import { useState, useEffect } from 'react'
import { Div } from './Container'
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../css/iteminformation.css'
export const Iteminformation = () => {
  const [show, setShow] = useState(false)
<<<<<<< HEAD

=======
  const [data,setData]=useState([])
 
async function getdata(){
  let res=await axios.get("http://localhost:4000/AC")

  setData(res)
}

  useEffect(()=>{
     getdata()
  },[])
>>>>>>> b6466a2d95538c123a43f7b3cc4a4fb30239f55b
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
          <div onClick={uploadImg}>
            <div className='ton'>1 Ton</div>
            <div className='tonPrice'>₹300/piece</div>
          </div>
          <div onClick={uploadImg}>
            <div className='ton'>1.5 Ton</div>
            <div className='tonPrice'>₹3000/piece</div>
          </div>
          <div onClick={uploadImg}>
            <div className='ton'>2 Ton</div>
            <div className='tonPrice'>₹300/piece</div>
          </div>
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
