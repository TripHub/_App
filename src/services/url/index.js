/**
 * Takes a URL hash and key, returning the value of the key in the hash.
 * @param {string} hash - Hash to parse.
 * @param {string} key - Key to extract from the hash.
 */
export const getHashItem = (hash, key) => {
  const cleanHash = hash.replace(/^#/, '')
  const fragments = cleanHash.split('&')
  const hashItem = fragments.find((f) => f.split('=')[0] === key)
  return hashItem
    ? hashItem.split('=')[1]
    : undefined
}

export const getReturnToValue = (hash) => {
  const hashState = getHashItem(hash, 'state')
  try {
    if (hashState) {
      const decodedState = decodeURIComponent(hashState)
      const jsonState = JSON.parse(decodedState)
      return jsonState.returnTo || '/'
    }
  } catch (e) { /** Fail silently. */ }
  return '/'
}
