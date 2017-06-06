import { CALL_API } from 'redux-api-middleware'

// sets defaults then updates with given config
export const apiRequest = (endpoint, config) => ({
  [CALL_API]: {
    endpoint: process.env.REACT_APP_API_URL + endpoint,
    method: 'get',
    headers: ({ user }) => ({
      Authorization: user.accessToken,
      'Content-Type': 'application/json'
    }),
    ...config
  }
})
