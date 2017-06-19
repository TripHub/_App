import auth0 from 'auth0-js'

export default class Auth {
  /**
   * Creates an instance of Auth, configured using the .env file.
   * @memberof Auth
   */
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      audience: process.env.REACT_APP_AUTH0_API_AUD,
      redirectUri: `${window.location.origin}/auth/callback`,
      responseType: 'token id_token',
      scope: 'openid profile',
      leeway: 30
    })
  }

  /**
   * Generates a cryptographically secure string.
   * @param {int} [length=16] - The returned string length.
   * @static
   * @memberof Auth
   */
  static generateCryptoString = (length = 16) => {
    const bytes = new Uint8Array(length)
    const charset = '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~'
    const random = window.crypto.getRandomValues(bytes)
    let result = []
    random.forEach((c) => {
      result.push(charset[c % charset.length])
    })
    return result.join('')
  }

  /**
   * Takes an authResult object (returned by Auth0) and checks it contains the
   * required fields.
   * @static
   * @memberof Auth
   */
  static isValidAuthResult = (authResult) => (
    authResult && authResult.accessToken && authResult.idTokenPayload
  )

  /**
   * Calls Auth0's authorize method, but within an iFrame so the user is not
   * redirected. The hash passed to the iFrame (parsed by the parseHash method)
   * contains the results of the authentication request.
   * @memberof Auth
   */
  renewAuth = (config) => {
    const nonce = Auth.generateCryptoString(16)
    window.localStorage.setItem('nonce', nonce)
    this.auth0.authorize({
      nonce,
      state: JSON.stringify(config),
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      audience: process.env.REACT_APP_AUTH0_API_AUD,
      prompt: 'none',
      scope: 'openid profile',
      responseType: 'id_token token',
      redirectUri: `${window.location.origin}/auth/renew`
    })
  }

  /**
   * Call's Auth0's parseHash method.
   * @memberof Auth
   */
  parseHash = (handle) => (
    this.auth0.parseHash(window.location.hash, handle)
  )

  /**
   * Takes an accessToken and calls Auth0's API to get the user's profile info.
   * @memberof Auth
   */
  getUserProfile = (accessToken, handle) => (
    this.auth0.client.userInfo(accessToken, handle)
  )

  /**
   *
   *
   *
   * @memberof Auth
   */
  handleAuthentication = (handle) => (
    this.auth0.parseHash(handle)
  )

  /**
   * Call's Auth0's Authorize method.
   * @param config {object} - additional information to add to the request.
   * @memberof Auth
   */
  login = (config = {}) => (
    this.auth0.authorize({
      state: JSON.stringify(config)
    })
  )

  /**
   * Call's Auth0's logout method.
   * @memberof Auth
   */
  logout = () => (
    this.auth0.logout()
  )
}
