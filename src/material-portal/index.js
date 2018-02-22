/* global AFRAME */
import loadStairs from '../cube-textures/stairs/load'
import loadWater from '../cube-textures/water/load'
import loadSky from '../cube-textures/stormydays/load'
import createMaterial from './createSkyBoxMaterial'
import createCache from '../cache'

const cubeTextures = {
  forest: loadStairs(),
  ocean: loadWater(),
  sky: loadSky(),
}

const materialCache = createCache(createMaterial)

AFRAME.registerComponent('material-portal', {
  schema: {scene: {type: 'string'}},
  init() {
    const {scene} = this.data
    if (!scene || !cubeTextures[scene]) {
      return
    }

    cubeTextures[scene].then(cubeTexture => {
      this.material = materialCache(cubeTexture)

      this.applyMaterialToMesh()
      this.el.addEventListener('model-loaded', () => this.applyMaterialToMesh())
    })
  },
  update() {
    this.init()
  },
  applyMaterialToMesh() {
    const object = this.el.getObject3D('mesh');
    const material = this.material;
    if (object) {
      object.traverse(function (node) {
        if (node.isMesh) node.material = material;
      })
    }
  },
})
