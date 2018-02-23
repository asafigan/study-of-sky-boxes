/* globals AFRAME */
import createMaterial from './createMaterial'

AFRAME.registerComponent('material-horizon-skybox', {
  schema: {
    bottomColor: {type: "color", default: "grey"},
    topColor: {type: "color", default: "grey"},
    horizonColor: {type: "color", default: "white"},
    bottomTransitionFactor: {default: 10},
    topTransitionFactor: {default: 0.5},
    intensity: {default: 1},
  },
  init() {
    this.material = new createMaterial(this.data)
    this.applyMaterialToMesh()
  },
  applyMaterialToMesh() {
    const object = this.el.getObject3D('mesh');
    const material = this.material;
    if (object) {
      object.traverse(function (node) {
        if (node.isMesh) node.material = material;
      })
    }
  }
})
