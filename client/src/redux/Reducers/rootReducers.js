import usereducer from './UserReducers';
import User_Select from './UserActionReducers';
import EventReducers from './EventReducers';
import Event_Select from './EventActionReducers';
import { combineReducers } from 'redux';
import OrganisateurReducer from './OrganisateurReducer';
import One_Event_Select from './OneEventReducer';
import Ticket_Select from './TicketActionReducers';
import Stat_Select from './StatActionReducers';

export default combineReducers({ usereducer, One_Event_Select, EventReducers, User_Select, Event_Select, OrganisateurReducer, Ticket_Select, Stat_Select });