// REDUX
import { Dispatch } from 'redux';
// ACTIONTYPES
import { ActionType, Action } from '../action-types'
// AXIOS
import axios from 'axios';
// UTILITY
import url from '../../utilities/url'

// USERS OPERATIONS
export const phpRequest = (user: any) => {
    return async (dispatch: Dispatch<Action>) => {
        try {
            const { data } = await axios.post(`${url}user`, user);
            if (data.userEmail && data.user) dispatch(login(data));
            else dispatch(responseLog(data.log));
        } catch (error) {
            console.error(error);
        }
    };
};

// LOGIN ACTION
export const login: (userData: { log: string, user: string, user_email: string }) => {
    type: ActionType.LOG_IN;
    payload: { log: string, user: string, user_email: string };
} = userData => {
    return {
        type: ActionType.LOG_IN,
        payload: {
            log: userData.log,
            user: userData.user,
            user_email: userData.user_email,
        }
    };
};

// UI LOG ACTION
export const responseLog: (log: string) => {
    type: ActionType.PHP_LOG,
    payload: string;
} = log => {
    return {
        type: ActionType.PHP_LOG,
        payload: log,
    };
};

// LOGOUT ACTION
export const logout = () => {
    return {
        type: ActionType.LOG_OUT,
    };
};