import 'aframe'
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Entity, Scene} from 'aframe-react'
import './material-portal'
import './material-horizon-skybox'
import 'aframe-text-geometry-component'
import HorseAndTree from './pages/HorseAndTree'
import Home from './pages/Home'
import Hallway from './pages/Hallway'
import Doorways from './pages/DoorWays'
import NotFound from './pages/NotFound'

export default class App extends Component {
  render() {
    return (
      <Scene>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/horse" component={HorseAndTree}/>
            <Route exact path="/hallway" component={Hallway}/>
            <Route exact path="/doorways" component={Doorways}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </Scene>
    )
  }
}
