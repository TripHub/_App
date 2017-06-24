import { schema } from 'normalizr'

export const user = new schema.Entity('user')
export const destination = new schema.Entity('destination')
export const trip = new schema.Entity('trip', {
  members: [ user ],
  owner: user,
  destinations: [ destination ]
})
export const invitation = new schema.Entity('invitation', { trip })
