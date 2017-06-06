import { apiRequest } from '../../services/api'

export const GET_TRIPS_REQUEST = 'GET_TRIPS_REQUEST'
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS'
export const GET_TRIPS_FAILURE = 'GET_TRIPS_FAILURE'
export const GET_TRIP_REQUEST = 'GET_TRIP_REQUEST'
export const GET_TRIP_SUCCESS = 'GET_TRIP_SUCCESS'
export const GET_TRIP_FAILURE = 'GET_TRIP_FAILURE'
export const CREATE_TRIP_REQUEST = 'CREATE_TRIP_REQUEST'
export const CREATE_TRIP_SUCCESS = 'CREATE_TRIP_SUCCESS'
export const CREATE_TRIP_FAILURE = 'CREATE_TRIP_FAILURE'
export const DELETE_TRIP_REQUEST = 'DELETE_TRIP_REQUEST'
export const DELETE_TRIP_SUCCESS = 'DELETE_TRIP_SUCCESS'
export const DELETE_TRIP_FAILURE = 'DELETE_TRIP_FAILURE'

export const getTrips = () => apiRequest('/trip/', {
  types: [GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE]
})

export const getTrip = (id) => apiRequest(`/trip/${id}/`, {
  types: [{
    type: GET_TRIP_REQUEST,
    payload: (action) => ({ id })
  }, GET_TRIP_SUCCESS, GET_TRIP_FAILURE]
})
