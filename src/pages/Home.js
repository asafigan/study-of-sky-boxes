import React from 'react'
import {Entity} from 'aframe-react'
import hallPreview from '../images/preview-hall.png'
import doorwaysPreview from '../images/preview-doorways.png'
import horsePreview from '../images/preview-horse.png'

export default function Home({history}) {
  const goTo = (path) => () => history.push(path)
  return (
    <Entity position="0 0 0">
      <Entity primative="a-resources">
        <Entity primative="a-asset-item" id="hallPreview" src={hallPreview}/>
        <Entity primative="a-asset-item" id="doorwaysPreview" src={doorwaysPreview}/>
        <Entity primative="a-asset-item" id="horsePreview" src={horsePreview}/>
      </Entity>
      <Entity primitive="a-sky" material-portal="scene: stormySky"/>
      <Entity position="0 2 -10" events={{
        click: goTo("/hall"),
        }}
        scale="0.001 0.001 0.001" width="4096" height="2048" primitive="a-image" src="#hallPreview"/>
      <Entity rotation="0 45 0">
        <Entity position="0 2 -10" events={{
          click: goTo("/doorways"),
          }}
          scale="0.001 0.001 0.001" width="4096" height="2048" primitive="a-image" src="#doorwaysPreview"/>
      </Entity>

      <Entity rotation="0 -45 0">
        <Entity position="0 2 -10" events={{
          click: goTo("/horse"),
          }}
          scale="0.001 0.001 0.001" width="4096" height="2048" primitive="a-image" src="#horsePreview"/>
      </Entity>

      <Entity primitive="a-camera">
        <Entity primitive="a-cursor"/>
      </Entity>
    </Entity>
  )
}
