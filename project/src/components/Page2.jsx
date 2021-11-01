import { Div } from './Container'
import '../css/page2.css'
// import { Button } from './Button'
const Page2 = () => {
  return (
    <>
      <Div>
        <p id='language'>Select app language</p>
        {/* <Button>Hindi</Button>
        <Button>English</Button> */}
        <button>Hindi</button>
        <button>English</button>
      </Div>
    </>
  )
}

export default Page2
