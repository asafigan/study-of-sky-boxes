/* global THREE */

const shader = THREE.ShaderLib.cube

const vertexShader = `
  varying vec3 viewDirection;

  void main() {
    vec4 vertex = vec4(position, 1.0);
    viewDirection = vec3(modelMatrix * vertex - vec4(cameraPosition, 1.0));
    gl_Position = projectionMatrix * modelViewMatrix * vertex;
  }
`

const fragmentShader = `
  varying vec3 viewDirection;
  uniform samplerCube tCube;
  void main() {
    gl_FragColor = textureCube(tCube, viewDirection);
  }
`

export default function createMaterial(cubeTexture) {
    const uniforms = THREE.UniformsUtils.clone(shader.uniforms)
    uniforms.tCube.value = cubeTexture

    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      depthWrite: true,
      side: THREE.DoubleSide,
    })
}
