import React from 'react'
import {Entity} from 'aframe-react'
import horseObj from '../models/horse.obj'
import treeObj from '../models/tree.obj'

export default function HorseAndTree({history}) {
  return (
    <Entity>
      <Entity primative="a-resources">
        <Entity primative="a-asset-item" id="horseObj" src={horseObj}/>
        <Entity primative="a-asset-item" id="treeObj" src={treeObj}/>
      </Entity>

      <Entity position="1 0 -5">
        <Entity scale="0.2 0.2 0.2" position="0 0 -1.5">
          <Entity primitive="a-obj-model" material-portal="scene: sky" position="13 0.8 -7" rotation="85 0 0" src="#treeObj"/>
        </Entity>
        <Entity scale="0.6 0.6 0.6" >
          <Entity rotation="0 90 -102" position="-1 1 0">
            <Entity primitive="a-obj-model" material-portal="scene: forest" src="#horseObj" position="0 -6 0"/>
          </Entity>
        </Entity>
      </Entity>

      <Entity primitive="a-sky" color="blue"/>
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor" raycaster="objects: .clickable"/>
      </Entity>
    </Entity>
  )
}
