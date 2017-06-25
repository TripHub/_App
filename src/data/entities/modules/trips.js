import { createSelector } from 'reselect'
import { merge, deleteFrom } from '../../../services/primitives'
import { ADD_ENTITIES, addEntities } from '../actions'

export const STATE_KEY = 'trips'
const SET_ACTIVE_TRIP = `${STATE_KEY}_set_active`
const DELETE = `${STATE_KEY}_delete`

const initialState = {
  didInvalidate: true,
  loading: false,
  byId: {},
  active: ''
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        ...state,
        byId: merge(state.byId, action.payload.trip, { loading: false }),
        didInvalidate: false,
        loading: false
      }
    case SET_ACTIVE_TRIP: {
      return {
        ...state,
        active: action.payload.id
      }
    }
    case DELETE: {
      return {
        ...state,
        byId: deleteFrom(state.byId, action.meta.id)
      }
    }
    default:
      return state
  }
}

export const getTrips = () => (dispatch, getState, { api, schema }) => (
  dispatch(api('/trip/', {
    bailout: ({ entities }) => !entities.trips.didInvalidate,
    success: addEntities([schema.trip])
  }))
)

export const getTrip = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/trip/${id}/`, {
    success: addEntities(schema.trip)
  }))
)

/**
 * Creates a trip.
 * @param {string} title - The title of the trip.
 */
export const createTrip = (title) => (dispatch, getState, { api, schema }) => (
  dispatch(api('/trip/', {
    method: 'post',
    body: JSON.stringify({ title }),
    success: addEntities(schema.trip)
  }))
)

/**
 * Updates a trip.
 * @param {string} id - ID of the trip to update.
 * @param {object} data - Object containing the new data (can be partial).
 */
export const updateTrip = (id, data) =>
  (dispatch, getState, { api, schema }) => (
    dispatch(api(`/trip/${id}/`, {
      method: 'PATCH',
      body: JSON.stringify(data),
      success: addEntities(schema.trip)
    }))
  )

/**
 * Deletes a trip.
 * @param {string} id - ID of the trip to delete.
 */
export const deleteTrip = (id) => (dispatch, getState, { api, schema }) => (
  dispatch(api(`/trip/${id}/`, {
    method: 'delete',
    success: {
      type: DELETE,
      meta: { id }
    }
  }))
)

/**
 * Sets the trip with the given ID as the active trip.
 * @param {string} id - ID of the trip to make active.
 */
export const setActiveTrip = (id) => ({
  type: SET_ACTIVE_TRIP,
  payload: { id }
})

/** Selectors */

const selectActiveTripId = ({ entities }) => entities.trips.active

export const selectActiveTrip = createSelector(
  [({ entities }) => entities.trips.byId, selectActiveTripId],
  (trips, active) => active ? trips[active] || {} : {}
)

export const isUserActiveTripOwner = createSelector(
  [({ user }) => user.sub, selectActiveTrip, ({ entities }) => entities.users.byId],
  (sub, activeTrip, users) => (
    activeTrip && activeTrip.owner && users[activeTrip.owner].auth0_id === sub
  )
)

export const selectActiveTripDestinations = createSelector(
  [({ entities }) => entities.destinations.byId, selectActiveTrip],
  (destinations, activeTrip) => (
    activeTrip.destinations &&
    activeTrip.destinations.map((id) => destinations[id])
  )
)

export const selectActiveTripInvitations = createSelector(
  [({ entities }) => entities.invitations.byId, selectActiveTripId],
  (invitations, activeTripId) => activeTripId &&
    Object.values(invitations)
      .filter((invitation) => invitation.trip === activeTripId)
)

export const selectActiveTripMembers = createSelector(
  [({ entities }) => entities.users.byId, selectActiveTrip],
  (users, activeTrip) => (activeTrip.members || [])
    .map(id => users[id]).filter(i => !!i)
)
