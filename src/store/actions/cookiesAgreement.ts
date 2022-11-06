// ACTIONTYPES
import { ActionType, Action } from '../action-types'
// COOKIEAGREED
export const cookiesAgreed = () => {
    return {
        type: ActionType.ACCEPT_COOKIE_AGREEMENT,
    };
};