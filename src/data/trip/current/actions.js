import { CALL_API } from 'redux-api-middleware'

export const GET_TRIP_REQUEST = 'GET_TRIP_REQUEST'
export const GET_TRIP_SUCCESS = 'GET_TRIP_SUCCESS'
export const GET_TRIP_FAILURE = 'GET_TRIP_FAILURE'
export const CREATE_TRIP_REQUEST = 'CREATE_TRIP_REQUEST'
export const CREATE_TRIP_SUCCESS = 'CREATE_TRIP_SUCCESS'
export const CREATE_TRIP_FAILURE = 'CREATE_TRIP_FAILURE'

export const getTrip = (id) => ({
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_API_URL}/trip/${id}/`,
    method: 'get',
    headers: ({ user }) => ({ Authorization: user.accessToken }),
    types: [GET_TRIP_REQUEST, GET_TRIP_SUCCESS, GET_TRIP_FAILURE]
  }
})

export const createTrip = (title) => ({
  [CALL_API]: {
    endpoint: `${process.env.REACT_APP_API_URL}/trip/`,
    method: 'post',
    headers: ({ user }) => ({ Authorization: user.accessToken, 'Content-Type': 'application/json' }),
    body: JSON.stringify({ title }),
    types: [CREATE_TRIP_REQUEST, CREATE_TRIP_SUCCESS, CREATE_TRIP_FAILURE]
  }
})
