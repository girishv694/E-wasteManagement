import '../css/language.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
// import { Button } from './Button'
const Language = () => {
  return (
    <>
      <Div>
        <p id='language'>
         
            <h1>Select app language</h1>
          
        </p>
        <Link to='/scrapeitem'>
          <button className="lang_btn">English</button>
          <button className="lang_btn">Hindi</button>
        </Link>
        </Div>
    </>
  )
}

export default Language
