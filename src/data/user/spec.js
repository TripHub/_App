/* global it, expect */

import reducer, { initialState } from './reducer'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})
