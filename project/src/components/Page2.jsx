import { Div } from './Container'
import '../css/page2.css'
<<<<<<< HEAD
import { Button } from './Button'
import { Link } from 'react-router-dom'
const Page2 = () => {
    return <>
        <Div>
            <p id="language">Select app language</p>

            <Link to="/page7">
                <Button>Hindi</Button>
            </Link>

        </Div>

=======
import { Link } from 'react-router-dom'
>>>>>>> 181893406d76bfca2e2d95ea7d80c5ad006892d5

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
