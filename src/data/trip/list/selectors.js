import { createSelector } from 'reselect'

const getTripsSelector = ({ trip }) => trip.list.trips

export const selectTrips = createSelector(
  [ getTripsSelector ],
  // very simple right now, but we will add filters (e.g. to see only trips you own etc...)
  (trips) => trips
)
