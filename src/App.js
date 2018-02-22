import 'aframe'
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Entity, Scene} from 'aframe-react'
import './material-portal'
import 'aframe-text-geometry-component'
import HorseAndTree from './pages/HorseAndTree'
import Home from './pages/Home'

export default class App extends Component {

  render() {
    return (
      <Scene>
        <Router>
          <Entity>
            <Route exact path="/" component={Home}/>
            <Route path="/horse-tree" component={HorseAndTree}/>
          </Entity>
        </Router>
      </Scene>
    )
  }
}
