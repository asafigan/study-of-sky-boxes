/* global THREE */

export default function loadCubeTexture({negz, negy, negx, posz, posy, posx}) {
  return new Promise((resolve, reject) => {
    new THREE.CubeTextureLoader().load([
      posx, negx, posy, negy, posz, negz
    ], resolve, null, reject)
  })
}
