import { SET_ALERT, REMOVE_ALERT } from './types';
import uuid from 'uuid';

export const setAlert = (msg,alertType) => dispach =>{
   const id = uuid.v4();
   dispach({
       type: SET_ALERT,
       payload: { msg, alertType, id}
   });
}