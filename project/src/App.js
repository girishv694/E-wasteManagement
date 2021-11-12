import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { Page5 } from './components/Page5'
import { Page20 } from './components/Page20'
import { Page21 } from './components/Page21'

import Page7 from './components/Page7'
import Page8 from './components/Page8'

import { Page11 } from './components/Page11'

import Itemcategory from './components/Itemcategory'
import { Iteminformation } from './components/Iteminformation'
import Miniature from './components/Miniature'
import Ewaste from './components/Ewaste'
import Congratulation from './components/Congratulation'
import Pickup from './components/Pickup'
import Lastpage from './components/Lastpage'
import Upi from './components/Upiaddress'
import { Register } from './components/Register'
import Login from './components/Login'
import Payment from './components/Payment'
import { Bargain } from './components/Bargain'




function App() {
  return (
    <div className='app'>
      <Switch>


        <Route path='/payment'>
          <Payment />
          {/* <Otp/> */}
        </Route>
        {/* <Route path='/'>
          {/* <Payment /> */}
          {/* <Otp/>
        </Route> */} 


        

        <Route path='/home'>
          <Home />
          {/* <Otp/> */}
        </Route>

        <Route path='/language'>
          <Page2 />
        </Route>

        <Route path='/scrapeitem'>
          <Page3 />
        </Route>


        <Route path='/date'>
          <Page5 />
        </Route>


        <Route path='/scrapesold'>
          <Page7></Page7>
        </Route>

        <Route path='/location'>
          <Page8></Page8>
        </Route>

        <Route path='/congrats'>
          <Congratulation />
        </Route>


        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>
     

        <Route path='/ewaste'>
          <Ewaste />
        </Route>


        <Route path='/itemcategory'>
          <Itemcategory />
        </Route>

        <Route path='/iteminformation'>
          <Iteminformation />
        </Route>

    
        
        <Route path='/bargain'>
         <Bargain/>
        </Route>

        <Route path='/appointment'>
          <Page20 />
        </Route>

        <Route path='/pickupconfirmation'>
          <Page21 />
        </Route>


        <Route path='/pick'>
          <Pickup />
        </Route>


        <Route path='/page11'>
          <Page11 />
        </Route>

        <Route path='/end'>
          <Lastpage />
        </Route>

        <Route path='/upi'>
          <Upi />
        </Route>

    

        <Route path='/miniature'>
          <Miniature />
        </Route>
    
      


      
      </Switch>
    </div>

  )
}

export default App
