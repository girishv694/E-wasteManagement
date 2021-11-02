import { Div } from './Container'
import '../css/page2.css'
import { Link } from 'react-router-dom'

// import { Button } from './Button'
const Page2 = () => {
  return (
    <>
      <Div>
        <p id='language'>
          <div className='front'>
            <h1>Select app language</h1>
          </div>
        </p>
        {/* <Button>Hindi</Button>
        <Button>English</Button> */}
        <Link to='/page3'>
          <button>English</button>
          <button>Hindi</button>
        </Link>
      </Div>
    </>
  )
}

export default Page2
