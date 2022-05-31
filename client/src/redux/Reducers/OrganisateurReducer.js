import { GET_ORGAN_STATUS, GET_ORGAN_STATUS_FAIL, GET_ORGAN_STATUS_SECCESS, 
    ACCEPT_ORGANISATEUR, ACCEPT_ORGANISATEUR_SECCESS, ACCEPT_ORGANISATEUR_FAIL 
} from './../ActionTypes/ActionTypes';
const initialState = {
    LOADING: false,
    isActivate: false,
    error: null
}

const OrganisateurReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET_ORGAN_STATUS:
        case ACCEPT_ORGANISATEUR:
            return {
                ...state,
                loading: true
            }
        case GET_ORGAN_STATUS_SECCESS:
        case ACCEPT_ORGANISATEUR_SECCESS:
            return {
                ...state,
                loading: false,
                isActivate: payload,
                error: false
            }
        case GET_ORGAN_STATUS_FAIL:
        case ACCEPT_ORGANISATEUR_FAIL:
            return {
                ...state,
                Loading: false,
                isActivate: false,
                error: payload
            }
        default:
            return state
    }
}
export default OrganisateurReducer