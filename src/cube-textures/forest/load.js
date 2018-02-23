import negx from './negx.jpg'
import negy from './negy.jpg'
import negz from './negz.jpg'
import posx from './posx.jpg'
import posy from './posy.jpg'
import posz from './posz.jpg'
import loadCubeTexture from '../loadCubeTexture'

export default function loadStairsTextureCube() {
  return loadCubeTexture({negz, negy, negx, posz, posy, posx})
}
