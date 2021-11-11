import { Div } from './Container'
import '../css/bargain.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Bargain = () => {
  function onFileChange1(event) {
    const formData = new FormData()
    formData.append('image_urls', event.target.files[0])
    axios.post('http://localhost:3001/products/img', formData)
  }
  return (
    <>
      <Div>
        <img
          src='http://localhost:3000/Images/backarrow1.svg'
          id='arrow'
          alt=''
          id='arrow'
        />

        <div id='bargain-statement'>Bargain corner</div>

        <div id='bargain-flex'>
          <input
            class='custom-file-input-2'
            type='file'
            encType='multipart/form-data'
            id='fileupload'
            name='fileupload'
            onChange={(e) => onFileChange1(e)}
          />
          <div>
            <h3>or</h3>
          </div>
          <div>
            <h3>Talk to our customer service representative</h3>
          </div>
        </div>

        <Link to='/page20'>
          <div id='bargain-cont'>Continue</div>
        </Link>
      </Div>
    </>
  )
}
