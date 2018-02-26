import React from 'react'
import {Entity} from 'aframe-react'

export default function Camera() {
  return (
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
  )
}
