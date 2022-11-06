// ACTIONTYPES
import { ActionType, Action } from '../action-types'

// INITIAL STATE
let initialState = {
    cookiesAgreement: false,
};

interface cookies_agreement_state {
    cookiesAgreement: boolean;
}

// LOCALSTORAGE STATE
if (localStorage.getItem('calceat_cookiesAgreement')) {
    initialState = { cookiesAgreement: true };
}
// REDUCER ACTION
const reducer = (state: cookies_agreement_state = initialState, action: Action) => {
    if (action.type === ActionType.ACCEPT_COOKIE_AGREEMENT) {
        return cookiesAgreed();
    } else {
        return state;
    }
};
//COOKIEAGREED
const cookiesAgreed = () => {
    localStorage.setItem('calceat_cookiesAgreement', JSON.stringify({
        cookiesAgreement: true,
    }));
    return {
        cookieAgreement: true,
    };
};

export default reducer;