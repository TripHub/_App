import { ADD_ENTITIES } from '../actions'

export const STATE_KEY = 'users'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        byId: Object.entries(action.payload.user || {})
          .reduce((users, [id, user]) => ({
            ...users,
            [id]: {
              ...(users[id] || {}),
              ...user
            }
          }), {})
      }
    default:
      return state
  }
}
