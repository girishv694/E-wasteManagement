import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

// import Header from './components/Header'
// import Home from './components/Home'
import Page1 from './components/Page1'
import Page7 from './components/Page7'
import Page8 from './components/Page8'
import { Page5 } from './components/Page5'

// import Page1 from './components/Page1'
import Home from './components/Home'
import Page2 from './components/Page2'
import Page3 from "./components/Page3"
import Page10 from './components/Page10'
import Page151 from './components/Page151'


function App() {
  return (
    <div className='app'>
      <Switch>
        <Route path='/page3'>
          <Page3 />
        </Route>

        <Route path='/page7'>
          <Page7></Page7>
        </Route>

        <Route path='/page8'>
          <Page8></Page8>
        </Route>

        <Route path='/page5'>
          <Page5 />
        </Route>

        <Route path='/page2'>
          <Page2 />
        </Route>

        <Route path='/signup'>
          <h1>Signup Page</h1>
        </Route>

        <Route path='/checkout'>
          <h1>Checkout Page</h1>
        </Route>

        <Route path="/page10">
          
          <Page10/>
        </Route>

        <Route path="/page151">
          <Page151/>
        </Route>

    

        <Route path='/'>
          <Page1 />
        </Route>
      </Switch>
    </div>
  )
}

export default App
