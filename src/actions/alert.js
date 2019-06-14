import { SET_ALERT, REMOVE_ALERT } from './types.js';
import uuid from 'uuid';

export const setAlert = (msg, alertType, timeout = 5000) => dispach =>{
   const id = uuid.v4();
   dispach({
       type: SET_ALERT,
       payload: { msg, alertType, id}
   });

   setTimeout(() => dispach({type: REMOVE_ALERT, payload: id}),timeout);
};