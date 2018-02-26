/* global AFRAME */
import loadForest from '../cube-textures/forest/load'
import loadStormySky from '../cube-textures/stormydays/load'
import loadBrightSky from '../cube-textures/TropicalSunnyDay/load'
import loadDarkSky from '../cube-textures/ThickCloudsWater/load'
import createMaterial from './createSkyBoxMaterial'
import createCache from '../cache'

const cubeTextures = {
  forest: loadForest(),
  stormySky: loadStormySky(),
  brightSky: loadBrightSky(),
  darkSky: loadDarkSky(),
}

const materialCache = createCache(createMaterial)

AFRAME.registerComponent('material-skybox', {
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
