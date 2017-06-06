import { createSelector } from 'reselect'

const _tripsSelector = (state) => ({ entities: state.trip.entities })
const _activeTripSelector = (state) => state.trip.activeTrip

export const activeTripSelector = createSelector(
  [ _tripsSelector, _activeTripSelector ],
  (trips, activeTrip) => trips.entities[activeTrip] || {}
)
