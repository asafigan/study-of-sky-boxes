export default function createCache(fn) {
  const map = new Map()
  return cacheKey => {
    const hit = map.get(cacheKey)
    if (hit) {
      return hit
    }

    const output = fn(cacheKey)
    map.set(cacheKey, output)

    return output
  }
}
