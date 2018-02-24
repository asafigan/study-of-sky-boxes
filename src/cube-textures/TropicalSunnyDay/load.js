import negx from './right.png'
import negy from './down.png'
import negz from './back.png'
import posx from './left.png'
import posy from './up.png'
import posz from './front.png'
import loadCubeTexture from '../loadCubeTexture'

export default function loadStairsTextureCube() {
  return loadCubeTexture({negz, negy, negx, posz, posy, posx})
}
