// ACTIONTYPES
import { ActionType, Action } from '../action-types'

// INITIAL STATE
const initial_state = {
    log: null,
    user: null,
    user_email: null,
};

interface auth_state {
    log: string | null;
    user: string | null;
    user_email: string | null;
}

// REDUCER ACTION
const reducer = (state: auth_state = initial_state, action: Action) => {
    console.log(state)
    if (action.type === ActionType.LOG_IN) {
        return login(state, action);
    } else if (action.type === ActionType.LOG_OUT) {
        return logout();
    } else if (action.type === ActionType.PHP_LOG) {
        return setLog(state, action);
    } else {
        return state;
    }
};

// ONLOGIN
const login = (state: auth_state, action: Action) => {
    return {
        log: action.payload.log,
        user: action.payload.user,
        user_email: action.payload.user_email,
    };
};
// ONLOGOUT
const logout = () => {
    return {
        log: null,
        user: null,
        user_email: null,
    };
};

// SETLOG
const setLog = (state: auth_state, action: Action) => {
    return {
        ...state,
        log: action.payload,
    };
};

export default reducer;