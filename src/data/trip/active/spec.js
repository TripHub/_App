/* global it, expect */

import * as actions from './actions'
import reducer, { initialState } from './reducer'

/** Actions Tests */
it('should create action to change active trip id', () => {
  const id = 'trip_z2Kvk6dyAsVzBWySXVUmF4mkgly'
  const expectedAction = {
    type: actions.SET_ACTIVE_TRIP,
    payload: { id }
  }
  expect(actions.setActiveTrip(id)).toEqual(expectedAction)
})

/** Reducers Tests */
it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(initialState)
})

it('should change active id', () => {
  const id = 'trip_FG2BrpUn7YE7xhBNEl0Qy2v1KSX'
  const action = {
    type: actions.SET_ACTIVE_TRIP,
    payload: { id }
  }
  expect(reducer(undefined, action)).toEqual({
    ...initialState,
    id
  })
})
