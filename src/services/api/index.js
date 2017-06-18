import { CALL_API } from 'redux-api-middleware'

/**
 * Sets useful request defaults, and then updates with given config.
 * @param {string} endpoint - The pathname of the endpoint to call
 * The REACT_APP_API_URL from .env is prepended.
 * @param {object} [config={}] - Additional request configuration.
 */
export const apiRequest = (endpoint, config = {}) => ({
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
