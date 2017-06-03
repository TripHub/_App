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
export const loginWithAuth0 = () => (dispatch) => {
  const auth = new Auth()
  dispatch(loginAuth0Request())
  auth.handleAuthentication((error, authResult) => {
    authResult && authResult.accessToken && authResult.idTokenPayload
      ? dispatch(loginAuth0Success(authResult))
      : dispatch(loginAuth0Failure(error))
  })
}

export const getUserProfile = (accessToken) => (dispatch) => {
  const auth = new Auth()
  dispatch(getUserProfileRequest())
  auth.getUserProfile(accessToken, (error, profile) => {
    console.log(error, profile)
    profile
      ? dispatch(getUserProfileSuccess(profile))
      : dispatch(getUserProfileFailure(error))
  })
}

export const loginWithAuth0AndGetProfile = () => (dispatch) => {
  const auth = new Auth()
  dispatch(loginAuth0Request())
  auth.handleAuthentication((error, authResult) => {
    console.log('actions.js: authResult', authResult, error)
    // check the response from Auth0
    if (authResult && authResult.accessToken && authResult.idTokenPayload) {
      // successful authentication
      dispatch(loginAuth0Success(authResult))
      // now we can get the profile details using the accessToken to identify the user
      dispatch(getUserProfileRequest())
      auth.getUserProfile(authResult.accessToken, (error, profile) => {
        profile
          ? dispatch(getUserProfileSuccess(profile))
          : dispatch(getUserProfileFailure(error))
      })
    } else {
      // unsuccessful authentication
      dispatch(loginAuth0Failure(error))
    }
  })
}
