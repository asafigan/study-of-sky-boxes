import React from 'react'
import {Entity} from 'aframe-react'
import {Hall} from '../components/Hall'
import Camera from '../components/Camera'

export default function HallWay({history}) {
  const height = 1.5
  const width = 1.2
  const length = 5
  const thickness = 0.2
  const dimensions = {
    height,
    width,
    length,
    thickness,
  }

  const materials = {
    interiorMaterial: {
      "material-skybox": {
        scene: "brightSky",
      },
    },
    exteriorMaterial: {},
  }

  return (
    <Entity rotation="0 0 0">
      <Entity primitive="a-sky" material-skybox="scene: darkSky"/>
      <Hall position={`0 ${height} ${-(5 + length/2)}`} {...dimensions} {...materials}/>
      <Camera/>
    </Entity>
  )
}
