/**
 * Limits the rate at which a function is called to a specified rate.
 * @param {function} callback
 * @param {integer} wait
 * @param {*} context
 */
export const debounce = (callback, wait, context = this) => {
  let timeout = null
  let callbackArgs = null

  const later = () => callback.apply(context, callbackArgs)

  return () => {
    callbackArgs = arguments
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
