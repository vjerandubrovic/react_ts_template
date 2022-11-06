// MODELS
// import { Game_model } from '../../models/Game_model';
// import { Provider_model, Vendor_model } from '../../models/Systems_model';
// import { Game_details_model } from '../../models/Game_details_model';

export enum ActionType {
    // INIT
    SET_DATA_PRODUCTS = 'SET_DATA_PRODUCTS',
    // UI
    SET_HINTS = 'SET_HINTS',
    // CALCULATORS CALCULATION
    ADD_PRODUCT_NAME = 'ADD_PRODUCT_NAME',
    ADD_PRODUCT_QUANTITY = 'ADD_PRODUCT_QUANTITY',
    ADD_PRODUCT_MEASURE = 'ADD_PRODUCT_MEASURE',
    CALCULATE_PRODUCT = 'CALCULATE_PRODUCT',
    // CALCULATORS OPERATIONS
    ADD_PRODUCT = 'ADD_PRODUCT',
    EDIT_PRODUCT = 'EDIT_PRODUCT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    DELETE_ALL_PRODUCTS = 'DELETE_ALL_PRODUCTS',
    // USERS OPERATIONS
    LOG_IN = 'LOG_IN',
    LOG_OUT = 'LOG_OUT',
    PHP_LOG = 'PHP_LOG',
    GET_LOCALSTORAGE_DATA = 'GET_LOCALSTORAGE_DATA',
    // COOKIES AGREEMENT
    ACCEPT_COOKIE_AGREEMENT = 'ACCEPT_COOKIE_AGREEMENT'
}

// INIT
interface actionSetDataProducts {
    type: ActionType.SET_DATA_PRODUCTS;
    payload: any;
}
// UI
interface actionSetHints {
    type: ActionType.SET_HINTS;
    payload: any;
}
// CALCULATORS CALCULATION
interface actionAddProductName {
    type: ActionType.ADD_PRODUCT_NAME;
    payload: string;
}
interface actionAddProductQuantity {
    type: ActionType.ADD_PRODUCT_QUANTITY;
    payload: number;
}
interface actionAddProductMeasure {
    type: ActionType.ADD_PRODUCT_MEASURE;
    payload: string;
}
interface actionCalculateProduct {
    type: ActionType.CALCULATE_PRODUCT;
    payload: any;
}
// CALCULATORS OPERATIONS
interface actionAddProduct {
    type: ActionType.ADD_PRODUCT;
    payload: {
        newProduct: any;
        userEmail: any;
    };
}
interface actionEditProduct {
    type: ActionType.EDIT_PRODUCT;
    payload: {
        newQuantity: any;
        id: any;
        user_email: any;
    }
}
interface actionDeleteProduct {
    type: ActionType.DELETE_PRODUCT;
    payload: {
        newQuantity: any;
        id: any;
        userEmail: any;
    }
}
interface actionDeleteAllProducts {
    type: ActionType.DELETE_ALL_PRODUCTS;
    payload: any;
}
// USERS OPERATIONS
interface actionLogIn {
    type: ActionType.LOG_IN;
    payload: { log: string, user: string, user_email: string };
}
interface actionLogOut {
    type: ActionType.LOG_OUT;
    payload: null;
}
interface actionLogs {
    type: ActionType.PHP_LOG;
    payload: string;
}
interface actionAcceptCookieAgreement {
    type: ActionType.ACCEPT_COOKIE_AGREEMENT;
    payload: null;
}
interface actionGetLocalstorageData {
    type: ActionType.GET_LOCALSTORAGE_DATA;
    payload: any;
}

export type Action =
    actionSetDataProducts |
    actionSetHints |
    actionGetLocalstorageData |
    actionAddProduct |
    actionEditProduct |
    actionDeleteProduct |
    actionDeleteAllProducts |
    actionLogIn |
    actionLogOut |
    actionLogs |
    actionAcceptCookieAgreement |
    actionAddProductName |
    actionAddProductQuantity |
    actionAddProductMeasure |
    actionCalculateProduct;