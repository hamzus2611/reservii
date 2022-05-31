import { GET_STAT_ADMIN, GET_STAT_ADMIN_FAIL, GET_STAT_ADMIN_SECCESS, GET_STAT_ORGAN, GET_STAT_ORGAN_FAIL, GET_STAT_ORGAN_SECCESS } from "../ActionTypes/ActionTypes"


const initState = {
  Loading: false,
  stats: [],
  error: null
}


const Stat_Select = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_STAT_ADMIN:
    case GET_STAT_ORGAN:
      return {
        ...state,
        Loading: true,
        stats: [],
      }

    case GET_STAT_ADMIN_SECCESS:
    case GET_STAT_ORGAN_SECCESS:
      return {
        ...state,
        Loading: false,
        stats: payload,
        error: null
      }

    case GET_STAT_ADMIN_FAIL:
    case GET_STAT_ORGAN_FAIL:
      return {
        ...state,
        Loading: false,
        stats: null,
        error: payload
      }

      
    default:
      return state
  }
}
export default Stat_Select;