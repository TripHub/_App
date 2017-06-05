import { createSelector } from 'reselect'

const userAccessTokenSelector = ({ user }) => user.accessToken
const userExpiryTimeSelector = ({ user }) => user.expiryTime

export const isUserAuthenticated = createSelector(
  [ userAccessTokenSelector, userExpiryTimeSelector ],
  (accessToken, expiryTime) => (
    // check there's an accessToken and we're within expiry time
    accessToken !== '' && expiryTime > new Date().getTime()
  )
)
