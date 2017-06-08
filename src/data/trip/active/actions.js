// import { apiRequest } from '../../services/api'

export const SET_ACTIVE_TRIP = 'SET_ACTIVE_TRIP'

export const setActiveTrip = (id) => ({
  type: SET_ACTIVE_TRIP,
  payload: { id }
})
