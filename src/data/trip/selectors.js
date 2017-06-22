import { createSelector } from 'reselect'
import { LOADING } from '../../common/fetch'

const getTrips = (state) => state.trip.entities
const getActiveTrip = (state) => state.trip.activeTripId
const getFetchStatus = (state) => state.trip.fetchStatus

export const activeTripSelector = createSelector(
  [ getTrips, getActiveTrip ],
  (entities, activeTripId) => (
    activeTripId
      ? entities[activeTripId] ? entities[activeTripId] : {}
      : {}
  )
)

export const isActiveTripLoading = createSelector(
  [ getFetchStatus, getActiveTrip ],
  (fetchStatus, activeTripId) => (
    fetchStatus[activeTripId] === LOADING
  )
)
