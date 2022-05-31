import {
  GET_ADMIN, GET_ADMIN_FAIL, GET_ADMIN_SECCESS,
  GET_CLIENT, GET_CLIENT_FAIL, GET_CLIENT_SECCESS,
  GET_DEMANDE_ORGANIZATEUR, GET_DEMANDE_ORGANIZATEUR_FAIL, GET_DEMANDE_ORGANIZATEUR_SECCESS,
  GET_ORGANISATEUR, GET_ORGANISATEUR_FAIL, GET_ORGANISATEUR_SECCESS,
  GET_USER_INFO, GET_USER_INFO_FAIL, GET_USER_INFO_SECCESS
} from "../ActionTypes/ActionTypes"


const initState = {
  Loading: false,
  users: [],
  error: null
}


const User_Select = (state = initState, { type, payload }) => {
  switch (type) {

    case GET_ADMIN:
    case GET_CLIENT:
    case GET_ORGANISATEUR:
    case GET_USER_INFO:
    case GET_DEMANDE_ORGANIZATEUR:
      return {
        ...state,
        Loading: true,
        users: [],
      }

    case GET_ADMIN_SECCESS:
    case GET_CLIENT_SECCESS:
    case GET_ORGANISATEUR_SECCESS:
    case GET_USER_INFO_SECCESS:
    case GET_DEMANDE_ORGANIZATEUR_SECCESS:
      return {
        ...state,
        Loading: false,
        users: payload,
        error: null
      }

    case GET_ADMIN_FAIL:
    case GET_CLIENT_FAIL:
    case GET_ORGANISATEUR_FAIL:
    case GET_USER_INFO_FAIL:
    case GET_DEMANDE_ORGANIZATEUR_FAIL:
      return {
        ...state,
        Loading: false,
        users: null,
        error: payload
      }

      
    default:
      return state
  }
}
export default User_Select;