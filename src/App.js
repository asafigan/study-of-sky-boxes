import 'aframe'
import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Entity, Scene} from 'aframe-react'
import './material-portal'
import './material-horizon-skybox'
import 'aframe-text-geometry-component'
import HorseAndTree from './pages/HorseAndTree'
import Home from './pages/Home'
import Hall from './pages/Hall'

export default class App extends Component {

  render() {
    return (
      <Scene>
        <Router>
          <Entity>
            <Route exact path="/" component={Home}/>
            <Route exact path="/horse-tree" component={HorseAndTree}/>
            <Route exact path="/hall" component={Hall}/>
          </Entity>
        </Router>
      </Scene>
    )
  }
}
