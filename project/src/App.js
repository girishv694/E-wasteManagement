import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Page1 from './components/Page1'
import Home from './components/Home'
import Page2 from './components/Page2'
function App() {
  return (

    <div className="app">
      <Switch>

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
          <h1>hi there</h1>
        </Route>


      </Switch>


    </div>

  )
}

export default App
