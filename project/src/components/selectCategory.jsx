import { useState, useEffect } from 'react'
import { Div } from './Container'
import axios from 'axios'

import '../css/category.css'
export const Category = () => {
  const [show, setShow] = useState(false)
  const [file, setFile] = useState([])
  console.log(file)
  const uploadImg = () => {
    setShow(!show)
  }

  function onFileChange(event) {
    // console.log(event);
    setFile(event.target.files[0])
  }
  function onFileUpload() {
    // Create an object of formData
    const formData = new FormData()

    // Update the formData object
    formData.append('image_urls', file)

    // Details of the uploaded file
    console.log(file)

    // Request made to the backend api
    // Send formData object
    axios.post('http://localhost:3001/products/img', formData)
  }
  return (
    <>
      <Div>
        <img src='Images/backarrow1.svg' alt='' id='arrow' />
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

        {show ? (
          <div className='imgupload'>
            <div >
              {/* <img src='Images/upload.svg' alt='' /> Upload scrap item's image */}
              <input
                type='file'
                encType='multipart/form-data'
                id='fileupload'
                name='fileupload'
                onChange={(e) => onFileChange(e)}
              />
              <button
                id='upload-btn'
                onClick={() => {
                  onFileUpload()
                }}
              >
                Upload scrap item's image
              </button>
            </div>
          </div>
        ) : null}

        <div className='select' >
          <div> Not satisfied with the price</div>
        </div>
      </Div>
    </>
  )
}
