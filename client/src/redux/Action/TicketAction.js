import { CREATE_TICKET, CREATE_TICKET_FAIL, CREATE_TICKET_SECCESS, GET_TICKET, GET_TICKET_FAIL, GET_TICKET_INFO, GET_TICKET_INFO_FAIL, GET_TICKET_INFO_SECCESS, GET_TICKET_SECCESS } from "../ActionTypes/ActionTypes"
import axios from "axios"


export const CreateTicket = (ticket, token) => async (dispatch) => {
    console.log(token)
    dispatch({
        type: CREATE_TICKET,
    });
    try {
        const res = await axios.post("/ticket/Create",
            ticket,
            {
                headers: {
                    'authorization': token
                }
            }
        )
        dispatch({
            type: CREATE_TICKET_SECCESS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: CREATE_TICKET_FAIL,
            payload: error
        })
    }

}

export const getTicket = (token) => async (dispatch) => {
    dispatch({
        type: GET_TICKET
    });
    try {
        let res = await axios.get('/ticket/GetTicket', {
            headers: {
                'authorization': token
            }
        })
        dispatch({
            type: GET_TICKET_SECCESS,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: GET_TICKET_FAIL,
            payload: error.response.data
        })
    }
}

export const getticketinfo = (token) => async (dispatch) => {
    dispatch({
        type: GET_TICKET_INFO,
    });
    try {
        const res = await axios.get("/ticket/GetTicketinfo",
            
            {
                headers: {
                    'authorization': token
                }
            }
        )
        dispatch({
            type: GET_TICKET_INFO_SECCESS,
            payload: res.data
        })


    } catch (error) {
        dispatch({
            type: GET_TICKET_INFO_FAIL,
            payload: error.response.data
        })
    }

}

