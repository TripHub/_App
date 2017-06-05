import * as actionTypes from './actions'

const initialState = {
  accessToken: '',
  picture: '',
  name: '',
  email: '',
  expiryTime: '',
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_AUTH0_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.LOGIN_AUTH0_SUCCESS:
      // we're working in millis
      const expiryTime = action.authResult.expiresIn * 1000 + new Date().getTime()
      return {
        ...state,
        expiryTime,
        accessToken: action.authResult.accessToken,
        loading: false
      }
    case actionTypes.LOGIN_AUTH0_FAILURE:
      return {
        ...state,
        accessToken: '',
        error: action.error.errorDescription,
        loading: false
      }
    case actionTypes.GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      }
    case actionTypes.GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.profile,
        loading: false
      }
    case actionTypes.GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case actionTypes.LOGOUT:
      return initialState
    default:
      return state
  }
}
