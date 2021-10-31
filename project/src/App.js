import React from 'react'
import './App.css'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>

        <Route path="/login">
          <h1>Login Page</h1>
        </Route>

        <Route path="/signup">
          <h1>Signup Page</h1>
        </Route>

        <Route path="/checkout">
          <h1>Signup Page</h1>
        </Route>

        <Route path="/">
          <h1>Home Page</h1>
        </Route>


      </Switch>

      
    </div>
    </Router>
  )
}

export default App
