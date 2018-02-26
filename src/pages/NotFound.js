import React, {Component} from 'react'
import { Entity } from "aframe-react"
import Camera from '../components/Camera'
import {Redirect} from 'react-router-dom'

export default class NotFound extends Component {

  constructor() {
    super()
    this.state = {
      time: 10,
      redirect: false,
    }
  }

  componentDidMount() {
    const countDown = () => {
      this.timeOut = setTimeout(() => {
        this.setState((previousState) => {
          return {
            time: previousState.time - 1,
            redirect: previousState.time < 1,
          }
        })
        countDown()
      }, 1000)
    }

    countDown()
  }

  componentWillUnmount() {
    clearTimeout(this.timeOut)
  }

  render() {
    const {time, redirect} = this.state
    return (
      <Entity>
        <Entity primitive="a-sky" material-skybox="scene: brightSky"/>
        <Entity text-geometry="value: 404" material-skybox="scene: stormySky" position="-10 0 -20" scale="20 20 20"/>
        <Entity text-geometry={`value: Redirecting to Gallery`} material-skybox="scene: darkSky" position="-6 1.5 -10" scale="2 2 2"/>
        <Entity text-geometry={`value: in ${time} seconds`} material-skybox="scene: darkSky" position="-3 0 -10" scale="2 2 2"/>
        <Camera/>
        {redirect && <Redirect to="/"/>}
      </Entity>
    )
  }
}
