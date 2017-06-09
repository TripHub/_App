/* global it, expect */

import * as actions from './actions'

it('should create action to change active trip id', () => {
  const id = 'trip_z2Kvk6dyAsVzBWySXVUmF4mkgly'
  const expectedAction = {
    type: actions.SET_ACTIVE_TRIP,
    payload: { id }
  }
  expect(actions.setActiveTrip(id)).toEqual(expectedAction)
})
