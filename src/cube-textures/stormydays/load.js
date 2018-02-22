
import negx from './bk.jpg'
import negy from './dn.jpg'
import negz from './lf.jpg'
import posx from './ft.jpg'
import posy from './up.jpg'
import posz from './rt.jpg'
import loadCubeTexture from '../loadCubeTexture'

export default function loadStairsTextureCube() {
  return loadCubeTexture({negz, negy, negx, posz, posy, posx})
}
