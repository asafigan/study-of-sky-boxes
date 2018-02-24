import negx from './back.png'
import negy from './down.png'
import negz from './left.png'
import posx from './front.png'
import posy from './up.png'
import posz from './right.png'
import loadCubeTexture from '../loadCubeTexture'

export default function loadStairsTextureCube() {
  return loadCubeTexture({negz, negy, negx, posz, posy, posx})
}
