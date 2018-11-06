import {
  UPDATE_STATE,
  SWITCH_STATE,
  UPDATE_FIELD_AUTH,
  POPUP_FIELD,
  UPDATE_JOBITEMS_JSON,
  UPDATE_CUSTOMERS_JSON,
  TOTAL_JOB_ITEM,
  UPDATE_SUBTITLE,
  ADD_LINE_ITEM,
  SET_LINE_ITEM,
  UPDATE_LINE_ITEM,
  UPDATE_JOBS,
  DELETE_LINE_ITEM,
  ALL_JOBS,
  POPUP_CONTENT,
  LOGOUT
} from '../actionTypes'

const INITIAL_STATE = {
  initialValues: { quoteMessage: 'All quotes are valid for 30 days' },
  tabValue: 0,
  noResult: 'Newly created quotes will appear here',
  dasboardJobs: false,
  jobitems: [{ name: '', value: '' }],
  totalJobItems: [{ Description: 'fdsf' }],
  jobLineItems: {},
  jobLineItems1: {},
  popupContent: [{}],
  jobs: {},
  filterjobs: [{}],
  customers: [{ name: '', value: '' }],
  quote: {},
  jobContent: {},
  lineItems: [{ total: 0 }],
  totalAmount: 0,
  JobItemPopup: false,
  deposit: 0,
  currentStatus: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        tabValue: action.value,
        currentStatus: action.payload,
        jobs: state.filterjobs.filter(e1 => {
          return (
            e1.status === action.key1 ||
            e1.status === action.key2 ||
            e1.status === action.key3
          )
        })
      }
    case POPUP_CONTENT:
      return {
        ...state,
        popupContent: state.popuplist.filter(e1 => {
          return e1.status === action.payload
        })
      }
    case SWITCH_STATE:
      return { ...state, dasboardJobs: action.value }
    case UPDATE_SUBTITLE:
      return { ...state, [action.key]: action.value }
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value }
    case UPDATE_JOBS:
      return { ...state, filterjobs: action.payload, dasboardJobs: false }
    case ALL_JOBS:
      return { ...state, tabValue: action.value, jobs: action.payload }
    case POPUP_FIELD:
      return { ...state, [action.key]: action.value }
    case TOTAL_JOB_ITEM:
      return { ...state, jobLineItems: action.payload }
    case UPDATE_JOBITEMS_JSON:
      return { ...state, jobitems: action.payload }
    case UPDATE_CUSTOMERS_JSON:
      return { ...state, customers: action.payload }
    case ADD_LINE_ITEM:
      return { ...state, lineItems: [...state.lineItems, action.payload] }
    case UPDATE_LINE_ITEM:
      return {
        ...state,
        lineItems: state.lineItems.map(
          (lineItem, index) =>
            index === action.index
              ? { ...lineItem, [action.key]: action.value }
              : lineItem
        )
      }
    case SET_LINE_ITEM:
      return {
        ...state,
        lineItems: state.lineItems.map(
          (lineItem, index) =>
            index === action.index ? action.value : lineItem
        )
      }
    case DELETE_LINE_ITEM:
      return {
        ...state,
        lineItems: [
          ...state.lineItems.slice(0, action.key),
          ...state.lineItems.slice(action.key + 1)
        ]
      }
    case LOGOUT:
      return { state: '' }
    default:
      return state
  }
}
