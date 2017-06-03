import { CALL_API } from 'redux-api-middleware'

export const GET_TRIP_REQUEST = 'GET_TRIP_REQUEST'
export const GET_TRIP_SUCCESS = 'GET_TRIP_SUCCESS'
export const GET_TRIP_FAILURE = 'GET_TRIP_FAILURE'

export const getTrip = (id) => ({
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_API_URL}/trip/${id}`,
    method: 'get',
    headers: ({ user }) => ({ Authorization: user.accessToken }),
    types: [GET_TRIP_REQUEST, GET_TRIP_SUCCESS, GET_TRIP_FAILURE]
  }
})
