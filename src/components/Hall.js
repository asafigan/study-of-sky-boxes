import React from 'react'
import {Entity} from 'aframe-react'

export function Hall({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
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

export function Frame({length, height, width, thickness, position="0 0 0", rotation="0 0 0", exteriorMaterial}) {
  return (
    <Entity {...{position, rotation}}>
      {/* right */}
      <Entity primitive="a-plane" width={thickness} height={height + thickness} position={`${width/2 + thickness/2} ${thickness/2} 0`} {...exteriorMaterial}/>
      {/* left */}
      <Entity primitive="a-plane" width={thickness} height={height + thickness} position={`${-(width/2 + thickness/2)} ${thickness/2} 0`} {...exteriorMaterial}/>
      {/* top */}
      <Entity primitive="a-plane" width={width} height={thickness} position={`0 ${height/2 + thickness/2} 0`} {...exteriorMaterial}/>
    </Entity>
  )
}

export function Wall({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
  return (
    <Entity {...{position, rotation}}>
      {/* interior */}
      <Entity primitive="a-plane" rotation="0 90 0" width={length} height={height} position={`${-width/2} 0 0`} {...interiorMaterial}/>
      {/* exterior */}
      <Entity primitive="a-plane" rotation="0 -90 0" width={length} height={height + thickness} position={`${-width/2 - thickness} ${thickness/2} 0`} {...exteriorMaterial}/>
    </Entity>
  )
}

export function Ceiling({length, height, width, thickness, position="0 0 0", rotation="0 0 0", interiorMaterial, exteriorMaterial}) {
  return (
    <Entity {...{position, rotation}}>
      {/* interior */}
      <Entity primitive="a-plane" rotation="90 90 0" width={length} height={width} position={`0 ${height/2} 0`} {...interiorMaterial}/>
      {/* exterior */}
      <Entity primitive="a-plane" rotation="-90 90 0" width={length} height={width} position={`0 ${height/2 + thickness} 0`} {...exteriorMaterial}/>
    </Entity>
  )
}
