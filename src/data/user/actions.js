import Auth from '../../services/auth'

// Action types
export const LOGIN_AUTH0_REQUEST = 'LOGIN_AUTH0_REQUEST'
export const LOGIN_AUTH0_SUCCESS = 'LOGIN_AUTH0_SUCCESS'
export const LOGIN_AUTH0_FAILURE = 'LOGIN_AUTH0_FAILURE'
export const GET_USER_PROFILE_REQUEST = 'GET_USER_PROFILE_REQUEST'
export const GET_USER_PROFILE_SUCCESS = 'GET_USER_PROFILE_SUCCESS'
export const GET_USER_PROFILE_FAILURE = 'GET_USER_PROFILE_FAILURE'

// Action creators
const loginAuth0Request = () => ({ type: LOGIN_AUTH0_REQUEST })
const loginAuth0Success = (authResult) => ({ type: LOGIN_AUTH0_SUCCESS, authResult })
const loginAuth0Failure = (error) => ({ type: LOGIN_AUTH0_FAILURE, error })
const getUserProfileRequest = () => ({ type: GET_USER_PROFILE_REQUEST })
const getUserProfileSuccess = (profile) => ({ type: GET_USER_PROFILE_SUCCESS, profile })
const getUserProfileFailure = (error) => ({ type: GET_USER_PROFILE_FAILURE, error })

// Action API
export const loginWithAuth0AndGetProfile = () => (dispatch) => {
  const auth = new Auth()
  dispatch(loginAuth0Request())
  auth.handleAuthentication((error, authResult) => {
    // check the response from Auth0
    if (authResult && authResult.accessToken && authResult.idTokenPayload) {
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

export const renewAuthRequest = () => (dispatch) => {
  const auth = new Auth()
  dispatch(loginAuth0Request())
  auth.renewAuth()
}

export const renewAuthHandler = (error, authResult) => (dispatch) => {
  const auth = new Auth()
  if (authResult && authResult.accessToken && authResult.idTokenPayload) {
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
}
