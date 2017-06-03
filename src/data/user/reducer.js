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
      return {
        ...state,
        expiryTime: action.user.exp,
        accessToken: action.accessToken,
        loading: false
      }
    case actionTypes.LOGIN_AUTH0_FAILURE:
      return {
        ...state,
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
    default:
      return state
  }
}
