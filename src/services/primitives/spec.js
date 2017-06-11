/* global it, describe, expect */

import { objectFromArray, objFrom } from './'

describe('objectFromArray', () => {
  const array = [
    { id: '1', x: 2 },
    { id: '2', x: 3 },
    { id: '3', x: 5, y: 'a' },
    { id: '4', x: 8, y: 'b' }
  ]

  it('should be keyed by specified value', () => {
    const result = objectFromArray(array, 'x', () => '')
    const expected = {
      '2': expect.anything(),
      '3': expect.anything(),
      '5': expect.anything(),
      '8': expect.anything()
    }
    expect(result).toEqual(expected)
  })

  it('should give value specified by getValue function', () => {
    const result = objectFromArray(array, 'id', (item) => item.x)
    const expected = {
      '1': 2,
      '2': 3,
      '3': 5,
      '4': 8
    }
    expect(result).toEqual(expected)
  })

  it('should give undefined without getValue function', () => {
    const result = objectFromArray(array, 'id')
    const expected = {
      '1': undefined,
      '2': undefined,
      '3': undefined
    }
    expect(result).toEqual(expected)
  })

  it('should filter out objects that don\'t contain the specified key', () => {
    const result = objectFromArray(array, 'y', () => '')
    const expected = {
      'a': '',
      'b': ''
    }
    expect(result).toEqual(expected)
  })
})

describe('objFrom', () => {
  const obj = {
    x: 1,
    y: {
      a: 2,
      b: 3
    }
  }

  it('should update primative values correctly', () => {
    const result = objFrom(obj, 'x', () => 0)
    const expected = {
      x: 0,
      y: {
        a: 2,
        b: 3
      }
    }
    expect(result).toEqual(expected)
  })

  it('should pass current value to valueFunc function', () => {
    const result = objFrom(obj, 'x', (x) => x + 10)
    const expected = {
      x: 11,
      y: {
        a: 2,
        b: 3
      }
    }
    expect(result).toEqual(expected)
  })

  it('should update object values correctly', () => {
    const result = objFrom(obj, 'y', ({ a, ...y }) => ({ ...y, c: 4 }))
    const expected = {
      x: 1,
      y: {
        b: 3,
        c: 4
      }
    }
    expect(result).toEqual(expected)
  })

  it('should return a new object reference', () => {
    const result = objFrom(obj)
    expect(result).not.toBe(obj)
  })

  it('should add the given key if it does not exist', () => {
    const result = objFrom(obj, 'z', () => 100)
    const expected = {
      x: 1,
      y: {
        a: 2,
        b: 3
      },
      z: 100
    }
    expect(result).toEqual(expected)
  })
})
