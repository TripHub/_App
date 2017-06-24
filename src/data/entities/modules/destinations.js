import { ADD_ENTITIES } from '../actions'

export const STATE_KEY = 'destinations'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case ADD_ENTITIES:
      return {
        byId: Object.entries(action.payload.destination || {})
          .reduce((destinations, [id, destination]) => ({
            ...destinations,
            [id]: {
              ...(destinations[id] || {}),
              ...destination
            }
          }), {})
      }
    default:
      return state
  }
}
