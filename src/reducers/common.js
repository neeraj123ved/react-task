import {
  APP_LOAD,
  REDIRECT,
  REGISTER,
  REGISTER_PAGE_UNLOADED,
  LOGIN,
  LOGOUT
} from '../actionTypes'

export const defaultState = {
  appName: 'Payaca',
  token: null,
  viewChangeCounter: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case APP_LOAD:
      return {
        ...state,
        token: action.token || null,
        appLoaded: true,
        currentUser: action.payload ? action.payload.user : null
      }
    case REDIRECT:
      return { ...state, redirectTo: null }
    case LOGOUT:
      return {
        ...state,
        token: null,
        redirectTo: '/',
        currentUser: null
      }
    case LOGIN:
    case REGISTER:
      return {
        ...state,
        token: action.error ? null : action.payload.token,
        currentUser: action.error ? null : action.payload
      }
    case REGISTER_PAGE_UNLOADED:
      return { ...state, viewChangeCounter: state.viewChangeCounter + 1 }
    default:
      return state
  }
}
