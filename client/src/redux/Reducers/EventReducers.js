import { CREATE_EVENT, CREATE_EVENT_FAIL, CREATE_EVENT_SECCESS} from "../ActionTypes/ActionTypes"



const initialState = {
  Loading: false,
  Event: [],
  errors: ""
};

const EventReducers = (state = initialState, { type, payload }) => {
  switch (type) {

    case CREATE_EVENT:
      return {
        ...state,
        Loading: true
      }
    case CREATE_EVENT_SECCESS:
      return {
        ...state,
        Loading: false,
        Evnet: payload,
        errors: null
      }
    case CREATE_EVENT_FAIL:
      return {
        ...state,
        Loading: false,
        Event: null,
        errors: payload
      }
    default:
      return state
  }
}
export default EventReducers;


