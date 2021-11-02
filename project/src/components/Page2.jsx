import { Div } from './Container'
import '../css/page2.css'
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


    </>
}


export default Page2