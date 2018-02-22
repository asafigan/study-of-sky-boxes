import React from 'react'
import {Entity} from 'aframe-react'

export default function Home({history}) {
  const goTo = (path) => () => history.push(path)
  return (
    <Entity position="0 0 0">
      <Entity text-geometry="value: This is a study of skyboxes"
        material-portal="scene: forest" position="-12 3 -10" scale="3 3 3"/>
      <Entity text-geometry="value: Horse with Tree" events={{
        click: goTo("/horse-tree"),
        }} material-portal="scene: forest" position="-4 0 -5" scale="2 2 2"/>
      <Entity primitive="a-sky" material-portal="scene: sky"/>
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor"/>
      </Entity>
    </Entity>
  )
}
