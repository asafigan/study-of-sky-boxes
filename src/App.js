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
import Doorways from './pages/DoorWays'

export default class App extends Component {

  render() {
    return (
      <Scene>
        <Router>
          <Entity>
            <Route exact path="/" component={Home}/>
            <Route exact path="/horse" component={HorseAndTree}/>
            <Route exact path="/hall" component={Hall}/>
            <Route exact path="/doorways" component={Doorways}/>
          </Entity>
        </Router>
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"
            events={{
              mouseenter: function() {
                this.setAttribute('material', 'color', 'springgreen')
              },
              mouseleave: function() {
                this.setAttribute('material', 'color', 'black')
              },
            }}
            raycaster="objects: .clickable"/>
        </Entity>
      </Scene>
    )
  }
}
