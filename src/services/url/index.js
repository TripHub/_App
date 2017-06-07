// Takes a URL hash and key, returning the value of the key in the hash
export const getHashItem = (hash, key) => {
  const cleanHash = hash.replace(/^#/, '')
  const fragments = cleanHash.split('&')
  const hashItem = fragments.find((f) => f.split('=')[0] === key)
  return hashItem
    ? hashItem.split('=')[1]
    : undefined
}
