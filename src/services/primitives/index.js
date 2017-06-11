// converts an array of objects to an object, where the keys are specified
// by `id` and the values are specified by `getValue` function.
export const objectFromArray = (array, key, valueFunc = () => {}) => {
  return array.reduce((acc, item) => {
    if (item[key] !== undefined) {
      acc[item[key]] = valueFunc(item)
    }
    return acc
  }, {})
}

// takes an object, key and value function and returns a new object with
// the value specified by the given key replaced with the given value.
export const objFrom = (obj, key, valueFunc) => {
  return {
    ...obj,
    ...key && { [key]: valueFunc(obj[key]) }
  }
}
