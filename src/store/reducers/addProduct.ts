// ACTIONTYPES
import { ActionType, Action } from '../action-types'

// UTILITY
import { calculation } from '../../utilities/calculation';

// INITIAL STATE
const initialState = {
    inputProduct: {
        name: '',
        quantity: 0,
        measure: 'g',
        g: '0',
        kcal: '0.00',
        protein: '0.00',
        carbs: '0.00',
        fat: '0.00',
    }
};

interface add_product_state {
    inputProduct: {
        name: string;
        quantity: number;
        measure: string;
        g: string;
        kcal: string;
        protein: string;
        carbs: string;
        fat: string;
    }
}

// REDUCER ACTIONS
const reducer = (state: add_product_state = initialState, action: Action) => {
    if (action.type === ActionType.ADD_PRODUCT_NAME) {
        return addProductName(state, action);
    } else if (action.type === ActionType.ADD_PRODUCT_QUANTITY) {
        return addProductQuantity(state, action);
    } else if (action.type === ActionType.ADD_PRODUCT_MEASURE) {
        return addProductMeasure(state, action);
    } else if (action.type === ActionType.CALCULATE_PRODUCT) {
        return calculateProduct(state, action);
    } else {
        return state;
    }
};
// ADDPRODUCTNAME
const addProductName = (state: add_product_state, action: Action) => {
    return {
        inputProduct: {
            ...state.inputProduct,
            name: action.payload.productName
        }
    };
};
// ADDPRODUCTQUANTITY
const addProductQuantity = (state: add_product_state, action: Action) => {
    return {
        inputProduct: {
            ...state.inputProduct,
            quantity: action.payload.productQuantity,
        }
    };
};
// ADDPRODUCTMEASURE
const addProductMeasure = (state: add_product_state, action: Action) => {
    return {
        inputProduct: {
            ...state.inputProduct,
            measure: action.payload.productMeasure,
        }
    };
};
// CALCULATEPRODUCT
const calculateProduct = (state: add_product_state, action: Action) => {
    const newProduct = calculation(action.payload.dataProducts, state.inputProduct);

    return {
        inputProduct: newProduct,
    };
};

export default reducer;