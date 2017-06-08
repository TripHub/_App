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

  static randomString = (length) => {
    const bytes = new Uint8Array(length)
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
    const random = window.crypto.getRandomValues(bytes)
    let result = []
    random.forEach((c) => {
      result.push(charset[c % charset.length])
    })
    return result.join('')
  }

  static isValidAuthResult = (authResult) => (
    authResult && authResult.accessToken && authResult.idTokenPayload
  )

  renewAuth = (config) => {
    const nonce = Auth.randomString(16)
    window.localStorage.setItem('nonce', nonce)
    this.auth0.authorize({
      nonce,
      state: JSON.stringify(config),
      prompt: 'none',
      audience: process.env.REACT_APP_AUTH0_API_AUD,
      scope: 'openid profile',
      responseType: 'id_token token',
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: `${window.location.protocol}//${window.location.host}/auth/renew`
    })
  }

  parseHash = (handle) => (
    this.auth0.parseHash(window.location.hash, handle)
  )

  getUserProfile = (accessToken, handle) => (
    this.auth0.client.userInfo(accessToken, handle)
  )

  handleAuthentication = (handle) => (
    this.auth0.parseHash(handle)
  )

  login = () => (
    this.auth0.authorize()
  )

  logout = () => (
    this.auth0.logout({
      returnTo: `${window.location.protocol}//${window.location.host}/`
    })
  )
}
