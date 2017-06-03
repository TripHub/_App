import auth0 from 'auth0-js'

export default class Auth {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: `${window.location.protocol}//${window.location.host}/auth/callback`,
      audience: process.env.REACT_APP_AUTH0_API_AUD,
      responseType: 'token id_token',
      scope: 'openid profile'
    })
  }

  static isAuthenticated = (user) => {
    // convert expiry time to int
    const expiryTime = parseInt(user.expiryTime, 10)
    // check we have a valid number
    const isValidExpiryTime = !Number.isNaN(expiryTime)
    // perform the check (and convert expiry time to milliseconds)
    return isValidExpiryTime && new Date().getTime() < expiryTime * 1000
  }

  getUserProfile = (accessToken, handle) => (
    this.auth0.client.userInfo(accessToken, handle)
  )

  handleAuthentication = (handle) => (
    this.auth0.parseHash(handle)
  )

  login = () => (
    this.auth0.authorize()
  )
}
