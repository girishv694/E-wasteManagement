import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
function App() {
  return (

    <div className="app">
      <Switch>

        <Route path="/login">
          <h1>Login Page</h1>
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
