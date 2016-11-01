import React from 'react'
import {Route, Redirect} from 'react-router'
import Main from './components/Main.js'
import About from './components/About.js'
import Home from './containers/Home.js'

module.exports = (
  <Route component={Main}>
    <Route path='/' component={Home}/>
    <Route path='/about' component={About}/>
  </Route>
)