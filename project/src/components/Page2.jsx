import { Container } from './Container_sk'
import '../css/page2.css'
import { Link } from 'react-router-dom'
import { Div } from './Container'
// import { Button } from './Button'
const Page2 = () => {
  return (
    <>
      <Div>
        <p id='language'>
         
            <h1>Select app language</h1>
          
        </p>
        <Link to='/page3'>
          <button className="lang_btn">English</button>
          <button className="lang_btn">Hindi</button>
        </Link>
        </Div>
    </>
  )
}

export default Page2
