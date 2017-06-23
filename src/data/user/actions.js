import Auth from '../../services/auth'

// Action types
export const SIGNUP_AUTH0_REQUEST = 'SIGNUP_AUTH0_REQUEST'
export const SIGNUP_AUTH0_SUCCESS = 'SIGNUP_AUTH0_SUCCESS'
export const SIGNUP_AUTH0_FAILURE = 'SIGNUP_AUTH0_FAILURE'
export const LOGIN_AUTH0_REQUEST = 'LOGIN_AUTH0_REQUEST'
export const LOGIN_AUTH0_SUCCESS = 'LOGIN_AUTH0_SUCCESS'
export const LOGIN_AUTH0_FAILURE = 'LOGIN_AUTH0_FAILURE'
export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE'
export const LOGOUT = 'LOGOUT'

// Action creators
const loginAuth0Request = () => ({ type: LOGIN_AUTH0_REQUEST })
const loginAuth0Success = (authResult) => ({ type: LOGIN_AUTH0_SUCCESS, authResult })
const loginAuth0Failure = (error) => ({ type: LOGIN_AUTH0_FAILURE, error })
const getUserProfileRequest = () => ({ type: GET_USER_PROFILE_REQUEST })
const getUserProfileSuccess = (profile) => ({ type: GET_USER_PROFILE_SUCCESS, profile })
const getUserProfileFailure = (error) => ({ type: GET_USER_PROFILE_FAILURE, error })

// Action API
export const signup = (config) => (dispatch) => {
  const auth = new Auth()
  auth.login(config)
}

export const handleAuth0TokensAndGetProfile = () => (dispatch) => {
  const auth = new Auth()
  dispatch(loginAuth0Request())
  auth.auth0.parseHash((error, authResult) => {
    // check the response from Auth0
    if (Auth.isValidAuthResult(authResult)) {
      // successful authentication :)
      dispatch(loginAuth0Success(authResult))
      // now we can get the profile details using the accessToken to identify the user
      dispatch(getUserProfileRequest())
      auth.getUserProfile(authResult.accessToken, (error, profile) => {
        // check if we have received a profile object
        profile
          ? dispatch(getUserProfileSuccess(profile))
          : dispatch(getUserProfileFailure(error))
      })
    } else {
      // unsuccessful authentication :(
      dispatch(loginAuth0Failure(error))
    }
  })
}

export const renewAuthRequest = (config) => (dispatch) => {
  dispatch(loginAuth0Request())
  new Auth().renewAuth(config)
}

export const renewAuthHandler = (error, authResult) => (dispatch) => {
  const auth = new Auth()
  if (Auth.isValidAuthResult(authResult)) {
    // successful authentication :)
    dispatch(loginAuth0Success(authResult))
    // now we can get the profile details using the accessToken to identify the user
    dispatch(getUserProfileRequest())
    auth.getUserProfile(authResult.accessToken, (error, profile) => {
      // check if we have received a profile object
      console.log('profile', profile)
      profile
        ? dispatch(getUserProfileSuccess(profile))
        : dispatch(getUserProfileFailure(error))
    })
  } else {
    // unsuccessful authentication :(
    dispatch(loginAuth0Failure(error))
  }
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT })
    .then(() => new Auth().logout())
}
