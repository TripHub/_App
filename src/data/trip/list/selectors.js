import { createSelector } from 'reselect'

const _tripsSelector = ({ trip }) => trip.list

export const tripsSelector = createSelector(
  [ _tripsSelector ],
  (entities) => entities
)
