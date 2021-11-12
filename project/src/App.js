import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Language from './components/Language'
import ScrapeItem from './components/ScrapeItem'
import { Date } from './components/Date'
import Scrapesold from './components/Scrapesold'
import Location from './components/Location'

import { Page20 } from './components/Page20'
import { Page21 } from './components/Page21'




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
import { Bargain } from './components/Bargain'



function App() {
  return (
    <div className='app'>
      <Switch>

        <Route path='/payment'>
          <Payment />
        </Route>

      

        <Route path='/language'>
          <Language />
        </Route>

        <Route path='/scrapeitem'>
          <ScrapeItem/>
        </Route>

        <Route path='/date'>
          <Date />
        </Route>

        <Route path='/scrapesold'>
         <Scrapesold/>
        </Route>

        <Route path='/location'>
        <Location/>
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
          <Page93 />
        </Route>

        <Route path='/iteminformation'>
          <Category />
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
    
        <Route path='/'>
          <Home />
        </Route>


      
      </Switch>
    </div>

  )
}

export default App
