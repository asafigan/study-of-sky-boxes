import React from 'react'
import {Entity} from 'aframe-react'

export default function HallScene({history}) {
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
      "material-portal": {
        scene: "sky",
      },
    },
    exteriorMaterial: {},
  }

  return (
    <Entity rotation="0 0 0">
      <Entity primitive="a-circle" color="#bbb" radius="infinite" rotation="-90 0 0"/>
      <Entity primitive="a-sky" material-horizon-skybox="horizonColor: lightcyan; topColor: lightskyblue; bottomColor: whitesmoke; topTransitionFactor: 1;"/>
      <Hall position={`0 ${height} ${-(5 + length/2)}`} {...dimensions} {...materials}/>
      <Entity primitive="a-camera">
        <Entity primitive="a-cursor" raycaster="objects: .clickable"/>
      </Entity>
    </Entity>
  )
}

function Hall({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
  const dimensions = {
    height,
    width,
    length,
    thickness,
  }

  const materials = {
    interiorMaterial,
    exteriorMaterial,
  }
  return (
    <Entity position={`0 ${height} ${-(5 + length/2)}`}>
        <Wall {...dimensions} {...materials}/>
        <Wall rotation="0 180 0" {...dimensions} {...materials}/>
        <Ceiling {...dimensions} {...materials}/>
        <Frame position={`0 0 ${-length/2}`} rotation="0 180 0" {...dimensions} {...materials}/>
        <Frame position={`0 0 ${length/2}`} {...dimensions} {...materials}/>
      </Entity>
  )
}

function Frame({length, height, width, thickness, position="0 0 0", rotation="0 0 0"}) {
  return (
    <Entity {...{position, rotation}}>
      {/* right */}
      <Entity primitive="a-plane" width={thickness} height={height + thickness} position={`${width/2 + thickness/2} ${thickness/2} 0`}/>
      {/* left */}
      <Entity primitive="a-plane" width={thickness} height={height + thickness} position={`${-(width/2 + thickness/2)} ${thickness/2} 0`}/>
      {/* top */}
      <Entity primitive="a-plane" width={width} height={thickness} position={`0 ${height/2 + thickness/2} 0`} />
    </Entity>
  )
}

function Wall({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
  return (
    <Entity {...{position, rotation}}>
      {/* interior */}
      <Entity primitive="a-plane" rotation="0 90 0" width={length} height={height} position={`${-width/2} 0 0`} {...interiorMaterial}/>
      {/* exterior */}
      <Entity primitive="a-plane" rotation="0 -90 0" width={length} height={height + thickness} position={`${-width/2 - thickness} ${thickness/2} 0`} {...exteriorMaterial}/>
    </Entity>
  )
}

function Ceiling({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
  return (
    <Entity {...{position, rotation}}>
      {/* interior */}
      <Entity primitive="a-plane" rotation="90 90 0" width={length} height={width} position={`0 ${height/2} 0`} {...interiorMaterial}/>
      {/* exterior */}
      <Entity primitive="a-plane" rotation="-90 90 0" width={length} height={width} position={`0 ${height/2 + thickness} 0`} {...exteriorMaterial}/>
    </Entity>
  )
}
