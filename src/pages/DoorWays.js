import React from 'react'
import {Entity} from 'aframe-react'
import {Hall, Ceiling} from '../components/Hall'
import Camera from '../components/Camera'

export default function Doorways({history}) {
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
        scene: "darkSky",
      },
    },
    exteriorMaterial: {
      "material-skybox": {
        scene: "brightSky",
      },
    },
  }

  return (
    <Entity rotation="0 0 0">
      <Entity primitive="a-sky" {...materials.exteriorMaterial}/>
      <Hall position={`0 ${height} ${-(5 + length/2)}`} {...dimensions} {...materials}/>
      <Ceiling position={`0 ${height} ${-(5 + length/2)}`} rotation="0 0 180" {...dimensions} {...materials}/>
      <Camera/>
    </Entity>
  )
}
