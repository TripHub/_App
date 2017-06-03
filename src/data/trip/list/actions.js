import { CALL_API } from 'redux-api-middleware'

export const GET_TRIPS_REQUEST = 'GET_TRIPS_REQUEST'
export const GET_TRIPS_SUCCESS = 'GET_TRIPS_SUCCESS'
export const GET_TRIPS_FAILURE = 'GET_TRIPS_FAILURE'

export const getTrips = () => ({
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_API_URL}/trip/`,
    method: 'get',
    headers: ({ user }) => ({ Authorization: user.accessToken }),
    types: [GET_TRIPS_REQUEST, GET_TRIPS_SUCCESS, GET_TRIPS_FAILURE]
  }
})
