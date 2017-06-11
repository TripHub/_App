import { createSelector } from 'reselect'
import { LOADING } from '../../common/fetch'

const getTripData = ({ trip }) => trip

export const tripsSelector = createSelector(
  [getTripData],
  (trip) => trip
)

export const tripsEntitiesSelector = createSelector(
  [getTripData],
  ({ entities }) => entities
)

export const activeTripSelector = createSelector(
  [ getTripData ],
  ({ entities, activeTripId }) => (
    activeTripId
      ? entities[activeTripId]
      : {}
  )
)

export const isActiveTripLoading = createSelector(
  [ getTripData ],
  ({ fetchStatus, activeTripId }) => (
    fetchStatus[activeTripId] === LOADING
  )
)
