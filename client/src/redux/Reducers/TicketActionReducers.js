import { GET_TICKET, GET_TICKET_FAIL, GET_TICKET_INFO, GET_TICKET_INFO_FAIL, GET_TICKET_INFO_SECCESS, GET_TICKET_SECCESS, CREATE_TICKET, CREATE_TICKET_FAIL, CREATE_TICKET_SECCESS } from "../ActionTypes/ActionTypes"

const initState = {
  Loading: false,
  ticket: [],
  error: null
}


const Ticket_Select = (state = initState, { type, payload }) => {
  switch (type) {
    case CREATE_TICKET:
    case GET_TICKET:
    case GET_TICKET_INFO:
      return {
        ...state,
        Loading: true,
        ticket: [],
      }

    case CREATE_TICKET_SECCESS:
    case GET_TICKET_SECCESS:
    case GET_TICKET_INFO_SECCESS:
      return {
        ...state,
        Loading: false,
        ticket: payload,
        error: null
      }

    case CREATE_TICKET_FAIL:
    case GET_TICKET_FAIL:
    case GET_TICKET_INFO_FAIL:
      return {
        ...state,
        Loading: false,
        ticket: null,
        error: payload
      }
    default:
      return state
  }
}
export default Ticket_Select;