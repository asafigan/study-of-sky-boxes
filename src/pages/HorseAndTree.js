import React from 'react'
import {Entity} from 'aframe-react'
import horseObj from '../models/horse.obj'

export default function HorseAndTree({history}) {
  return (
    <Entity>
      <a-resources>
        <a-asset-item id="horseObj" src={horseObj}/>
      </a-resources>
      <Entity class=".clickable" text-geometry="value: Home" events={{
        click: () => {
          history.push("/")
        },
        }} material-portal="scene: sky" position="-2 0 -5" scale="2 2 2"/>
      <Entity scale="0.6 0.6 0.6" position="0 0 -5">
        <Entity rotation="0 90 -102" position="0 1 0">
          <Entity primitive="a-obj-model" src="#horseObj"   position="0 -6 0"/>
        </Entity>
      </Entity>

      <Entity primitive="a-sky" material-portal="scene: forest"/>
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor" raycaster="objects: .clickable"/>
      </Entity>
    </Entity>
  )
}
