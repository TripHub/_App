import { normalize } from 'normalizr'
export * from './modules/trips'

export const ADD_ENTITIES = 'ADD_ENTITIES'
export const addEntities = (schema) => ({
  type: ADD_ENTITIES,
  payload: (action, state, res) => res.json()
    .then((json) => normalize(json.results || json, schema).entities)
})
