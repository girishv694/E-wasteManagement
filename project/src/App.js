import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'


import Home from './components/Home'
import Language from './components/Language'
import ScrapeItem from './components/ScrapeItem'
import { Date } from './components/Date'
import Scrapesold from './components/Scrapesold'
import Location from './components/Location'
import Congratulation from './components/Congratulation'
import { Register } from './components/Register'
import Login from './components/Login'
import Ewaste from './components/Ewaste'
import Itemcategory from './components/Itemcategory'
import { Iteminformation } from './components/Iteminformation'
import { Bargain } from './components/Bargain'
import { Appointment } from './components/Appointment'
import { Pickupconformation } from './components/Pickupconformation'


import { Page11 } from './components/Page11'
import Miniature from './components/Miniature'
import Pickup from './components/Pickup'
import Payment from './components/Payment'
import Upi from './components/Upiaddress'
import Lastpage from './components/Lastpage'



function App() {
  return (
    <div className='app'>
      <Switch>

        {/* Start from 2nd page */}
        <Route path='/language'>
          <Language />
        </Route>

        <Route path='/scrapeitem'>
          <ScrapeItem />
        </Route>


        <Route path='/date'>
          <Date />
        </Route>


        <Route path='/scrapesold'>
          <Scrapesold />
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
          <Itemcategory />
        </Route>

        <Route path='/iteminformation/AC'>
          <Iteminformation />
        </Route>

        <Route path='/bargain'>
          <Bargain />
        </Route>

        <Route path='/appointment'>
          <Appointment />
        </Route>

        <Route path='/pickupconfirmation'>
          <Pickupconformation />
        </Route>


        <Route path='/miniature'>
          <Miniature />
        </Route>
        
        <Route path='/payment'>
          <Payment />
        </Route>

        <Route path='/upi'>
          <Upi />
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

        

        



        
        
        <Route path='/'>
          <Home />
        </Route>




      </Switch>
    </div>

  )
}

export default App
