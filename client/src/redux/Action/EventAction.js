import { CREATE_EVENT, CREATE_EVENT_SECCESS, CREATE_EVENT_FAIL, GET_EVENT, GET_EVENT_SECCESS, GET_EVENT_FAIL, GET_ONE_EVENT, GET_ONE_EVENT_SECCESS, GET_ONE_EVENT_FAIL, LOGOUT, GET_MY_EVENTS, GET_MY_EVENTS_FAIL } from "../ActionTypes/ActionTypes"

import axios from "axios"
import { GET_MY_EVENTS_SECCESS } from './../ActionTypes/ActionTypes';

export const CreateEvent = (NewEvent,token) => async (dispatch) => {
    dispatch({
        type: CREATE_EVENT
    });
    try {
        let res = await axios.post('/event/CreateEvent', NewEvent,

            {
                headers: {
                    'authorization': token
                }
            }
        );
        dispatch({
            type: CREATE_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: CREATE_EVENT_FAIL,
            payload: error.response.data
        });
    }
}

export const getevent = () => async (dispatch) => {
    dispatch({
        type: GET_EVENT
    });
    try {
        let res = await axios.get('/event/getevent')
        dispatch({
            type: GET_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_EVENT_FAIL,
            payload: error.response.data
        })
    }
}

export const getoneevent = (id) => async (dispatch) => {
    dispatch({
        type: GET_ONE_EVENT
    });
    try {
        console.log(id)
        let res = await axios.get(`/event/getoneevent/${id}`)
        dispatch({
            type: GET_ONE_EVENT_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_ONE_EVENT_FAIL,
            payload: error.response.data
        })
    }
}
export const logoutUser = () => dispatch => {
    localStorage.removeItem("token");
    window.location.reload(true);
    dispatch({
        type: LOGOUT
    })

}

export const GetMyEvents = (token) => async (dispatch) => {

    dispatch({
        type: GET_MY_EVENTS
    });
    try {
        let res = await axios.get(`/event/getEventOrganisateur/${token}`);
        dispatch({
            type: GET_MY_EVENTS_SECCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_MY_EVENTS_FAIL,
            payload: error.response.data
        });
    }

}