import auth0 from 'auth0-js'

export default class Auth {
  constructor () {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
      redirectUri: `${window.location.protocol}//${window.location.host}`,
      audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo`,
      responseType: 'token id_token',
      scope: 'openid'
    })
  }

  login = () => this.auth0.authorize()
}
