import { createSelector } from 'reselect'
import { LOADING } from '../../common/fetch'

const _tripsSelector = ({ trip }) => trip.entities
const _fetchStatusSelector = ({ trip }) => trip.fetchStatus
const _activeTripSelector = ({ trip }) => trip.activeTrip

export const activeTripSelector = createSelector(
  [ _tripsSelector, _activeTripSelector ],
  (entities, activeTrip) => (
    activeTrip
      ? entities[activeTrip]
      : {}
  )
)

export const isActiveTripLoading = createSelector(
  [ _fetchStatusSelector, _activeTripSelector ],
  (fetchStatus, activeTrip) => (
    fetchStatus[activeTrip] === LOADING
  )
)
