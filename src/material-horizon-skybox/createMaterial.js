/* globals THREE */

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
  uniform vec3 topColor;
  uniform vec3 horizonColor;
  uniform vec3 bottomColor;
  uniform float topTransitionFactor;
  uniform float bottomTransitionFactor;
  uniform float intensity;

  void main() {
    float p = normalize(viewDirection).y;
    float p1 = 1.0 - pow (min (1.0, 1.0 - p), topTransitionFactor);
    float p3 = 1.0 - pow (min (1.0, 1.0 + p), bottomTransitionFactor);
    float p2 = 1.0 - p1 - p3;
    gl_FragColor = vec4((topColor * p1 + horizonColor * p2 + bottomColor * p3) * intensity, 1.0);
  }
`

export default function createHorizonSkybox(uniforms) {
  uniforms = mapObject(uniforms, value => {
    if(typeof value === "string") {
      return new THREE.Color(value)
    }
    return value
  })
  uniforms = mapObject(uniforms, value => ({value}))

  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    depthWrite: true,
    side: THREE.DoubleSide,
  })
}

function mapObject(object, fn) {
  const newObject = {}
  for(const [key, value] of Object.entries(object)) {
    newObject[key] = fn(value)
  }
  return newObject
}
