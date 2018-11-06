import {
  LOGOURL,
  SWITCHSTEP,
  ACCOUNT,
  SIGNUP,
  REGISTER,
  UPDATE_FIELD_AUTH,
  ASYNC_START,
  LOGIN,
  STEPS,
  RESPONSE,
  UPDATE_STATE,
  LOADER
} from '../actionTypes'

const INITIAL_STATE = {
  activeStep: 0,
  userAccount: 'account',
  titleHeading: 'Create an account',
  id: '',
  response: '',
  typePassword: 'password',
  text: 'show',
  uploadBox: false,
  uploadImage: true,
  dashboard: false,
  vatRegistered: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value }
    case LOGIN:
      return { ...state, token: action.payload.token }
    case RESPONSE:
      return { ...state, response: action.value }
    case SWITCHSTEP:
      return { ...state, userAccount: action.payload }
    case REGISTER:
      return { ...state, [action.key]: action.value }
    case LOADER:
      return { ...state, [action.key]: action.value }
    case LOGOURL:
      return {
        ...state,
        uploadBox: action.modelBox,
        uploadImage: action.uploadImage
      }
    case SIGNUP:
      return {
        ...state,
        [action.key]: action.value,
        // <-- is this required?
        token: action.payload.token
      }
    case ACCOUNT:
      return { ...state, [action.key]: action.value, id: action.payload.id }
    case STEPS:
      return {
        ...state,
        activeStep: action.value,
        titleHeading: action.titleHeading
      }
    case UPDATE_STATE:
      return { ...state, typePassword: action.inputType, text: action.text }
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true }
      }
      break
    default:
      return state
  }
  return state
}
