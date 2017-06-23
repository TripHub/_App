import { createSelector } from 'reselect'
import { LOADING } from '../../common/fetch'

const getTrips = (state) => state.trip.entities
const getActiveTripId = (state) => state.trip.activeTripId
const getFetchStatus = (state) => state.trip.fetchStatus
const getUserSub = (state) => state.user.sub

export const getActiveTrip = createSelector(
  [ getTrips, getActiveTripId ],
  (entities, activeTripId) => (
    activeTripId
      ? entities[activeTripId] ? entities[activeTripId] : {}
      : {}
  )
)

export const isActiveTripLoading = createSelector(
  [ getFetchStatus, getActiveTripId ],
  (fetchStatus, activeTripId) => (
    fetchStatus[activeTripId] === LOADING
  )
)

export const isUserActiveTripOwner = createSelector(
  [ getUserSub, getActiveTrip ],
  (sub, activeTrip) => (
    activeTrip.owner &&
      activeTrip.owner.auth0_id &&
      activeTrip.owner.auth0_id === sub
  )
)
