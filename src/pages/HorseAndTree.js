import React from 'react'
import {Entity} from 'aframe-react'

export default function HorseAndTree({history}) {
  return (
    <Entity>
      <a-resources>

      </a-resources>
      <Entity text-geometry="value: Home" events={{
        click: () => {
          history.push("/")
        },
        }} material-portal="scene: sky" position="-2 0 -5" scale="2 2 2"/>
      <Entity primitive="a-sky" material-portal="scene: forest"/>
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor"/>
      </Entity>
    </Entity>
  )
}
