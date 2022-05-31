const { REGISTER, REGISTER_SECCESS, REGISTER_FAIL,
  LOGIN, LOGIN_FAIL, LOGIN_SECCESS,
  REGISTER_ORGANISATEUR, REGISTER_ORGANISATEUR_SECCESS, REGISTER_ORGANISATEUR_FAIL,
  REGISTER_ADMIN, REGISTER_ADMIN_SECCESS, REGISTER_ADMIN_FAIL, LOGOUT } = require("../ActionTypes/ActionTypes");



const initialState = {
  user: null,
  loading: false,
}
const usereducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case REGISTER_ADMIN:
    case REGISTER_ORGANISATEUR:
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        loading: true
      }

    case REGISTER_ADMIN_SECCESS:
    case REGISTER_ORGANISATEUR_SECCESS:
    case REGISTER_SECCESS:
    case LOGIN_SECCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: false
      }

    case REGISTER_ADMIN_FAIL:
    case REGISTER_ORGANISATEUR_FAIL:
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
        error: null
      }
    default:
      return state
  }
}
export default usereducer;