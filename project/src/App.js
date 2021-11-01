import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

// import Header from './components/Header'
// import Home from './components/Home'
import Page1 from './components/Page1'
import Page7 from './components/Page7'
import Page8 from './components/Page8'

// import Page1 from './components/Page1'
import Home from './components/Home'
import Page2 from './components/Page2'
function App() {
  return (

    <div className="app">
      <Switch>


        <Route path="/scrap_sold">
          <Page7></Page7>
        </Route>

        <Route path="/page8">
          <Page8></Page8>
        </Route>

        <Route path="/login">
         <Page2/>

        </Route>

        <Route path="/signup">
          <h1>Signup Page</h1>
        </Route>

        <Route path="/checkout">
          <h1>Checkout Page</h1>
        </Route>

        <Route path="/">
         <Page1/>
        </Route>

        


      </Switch>


    </div>

  )
}

export default App
