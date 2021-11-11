import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'


import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { Page5 } from './components/Page5'
import { Page20 } from './components/Page20'
import { Page21 } from './components/Page21'

import Page7 from './components/Page7'
import Page8 from './components/Page8'

import { Page11 } from './components/Page11'

import Page93 from './components/Page93'
import { Category } from './components/selectCategory'
import Miniature from './components/Miniature'
import Ewaste from './components/Ewaste'
import Congratulation from './components/Congratulation'
import Pickup from './components/Pickup'
import Lastpage from './components/Lastpage'
import Upi from './components/Upiaddress'
import { Register } from './components/Register'
import Login from './components/Login'
import Payment from './components/Payment'



function App() {
  return (
    <div className='app'>
      <Switch>

        <Route path='/payment'>
          <Payment />
        </Route>


        <Route path='/page1'>
          <Page1 />
        </Route>

        <Route path='/page2'>
          <Page2 />
        </Route>

        <Route path='/page3'>
          <Page3 />
        </Route>


        <Route path='/page5'>
          <Page5 />
        </Route>


        <Route path='/page7'>
          <Page7></Page7>
        </Route>

        <Route path='/page8'>
          <Page8></Page8>
        </Route>

        <Route path='/congrats'>
          <Congratulation />
        </Route>
        <Route path='/page11'>
          <Page11 />
        </Route>

        <Route path='/ewaste'>
          <Ewaste />
        </Route>


        <Route path='/page93'>
          <Page93 />
        </Route>

        <Route path='/pick'>
          <Pickup />
        </Route>
        <Route path='/category'>
          <Category />
        </Route>

        <Route path='/end'>
          <Lastpage />
        </Route>

        <Route path='/upi'>
          <Upi />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>




        {/* <Route path='/page21'>
          <Page21 />
        </Route>

        <Route path='/page20'>
          <Page20 />
        </Route>

         */}


        <Route path='/signup'>
          <h1>Signup Page</h1>
        </Route>

        <Route path='/checkout'>
          <h1>Checkout Page</h1>
        </Route>


        {/* 
      

       
        <Route path='/category'>
          <Category />
        </Route>

       
        <Route path='/mini/miniature'>
          <Miniature />
        </Route>

        
        */}


      
      </Switch>
    </div>

  )
}

export default App
