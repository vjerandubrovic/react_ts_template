// ACTIONTYPES
import { ActionType, Action } from '../action-types';
// UTILITY
import { calculation, calculateTotals } from '../../utilities/calculation';

// INITIAL STATE
let initialState = {
    dataProducts: null,
    hints: [],
    measures: [],
    allProducts: [],
    totals: {
        totalGrams: 0,
        totalKcal: 0,
        totalProtein: 0,
        totalCarbs: 0,
        totalFat: 0,
    },
};

interface calculator_state {
    dataProducts: any[] | null;
    hints: any[];
    measures: any[];
    allProducts: any[];
    totals: {
        totalGrams: number;
        totalKcal: number;
        totalProtein: number;
        totalCarbs: number;
        totalFat: number;
    },
}

// LOCALSTORAGE STATE
if (localStorage.getItem('calceat_products')) {
    const initialProducts = { ...JSON.parse(localStorage.getItem('calceat_products')!) };
    initialState = { ...initialState, ...initialProducts }
}
// REDUCER ACTION
const reducer = (state: calculator_state = initialState, action: Action) => {
    if (action.type === ActionType.SET_DATA_PRODUCTS) {
        return setDataProducts(state, action);
    } else if (action.type === ActionType.SET_HINTS) {
        return setHints(state, action);
    } else if (action.type === ActionType.GET_LOCALSTORAGE_DATA) {
        return getLocalStorageProducts(state, action)
    } else if (action.type === ActionType.ADD_PRODUCT) {
        return addProduct(state, action);
    } else if (action.type === ActionType.EDIT_PRODUCT) {
        return editProduct(state, action);
    } else if (action.type === ActionType.DELETE_PRODUCT) {
        return deleteProduct(state, action);
    } else if (action.type === ActionType.DELETE_ALL_PRODUCTS) {
        return deleteAllProducts(state, action);
    } else {
        return state;
    }
};
// INITIAL
const setDataProducts = (state: calculator_state, action: Action) => {
    return {
        ...state,
        dataProducts: action.payload.dataProducts,
    };
};
// ONLOGIN
const getLocalStorageProducts = (state: calculator_state, action: Action) => {
    const initialProducts = { ...JSON.parse(localStorage.getItem(`products_${action.payload.user_email}`)!) };
    return {
        ...state,
        ...initialProducts,
    };
};
// SETHINTS
const setHints = (state: calculator_state, action: Action) => {

    const words = action.payload.input.split(" ");

    const findHint = (element: string) => element.startsWith(words[0]);

    if (action.payload.input !== "") {

        const newHints = state.dataProducts!
            .map(el => el.product)
            .filter(product => product.split(" ").some(findHint));

        const newMeasures = state.dataProducts!
            .filter(el => el.product === action.payload.input)
            .flatMap(el => el.measures);

        return {
            ...state,
            hints: newHints,
            measures: newMeasures,
        }
    } else {
        return state;
    }
};
// ADDPRODUCT
const addProduct = (state: calculator_state, action: Action) => {

    if (action.payload.newProduct.name !== '') {
        let addID = 0;

        if (state.allProducts.length > 0) {
            addID = state.allProducts[state.allProducts.length - 1].id + 1;
        } else {
            addID = 0;
        }

        const newProduct = { ...action.payload.newProduct, id: addID };
        const newAllProducts = [...state.allProducts, newProduct];
        const newTotals = calculateTotals(newAllProducts);

        const newState = {
            ...state,
            allProducts: newAllProducts,
            totals: newTotals,
        };

        localStorage.setItem(`calceat_products`, JSON.stringify({
            allProducts: newAllProducts,
            totals: newTotals,
        }));

        return newState;
    }
};
// EDITPRODUCT
const editProduct = (state: calculator_state, action: Action) => {
    const found = state.allProducts.findIndex(el => el.id === action.payload.id);

    let product = { ...state.allProducts[found] };
    product.quantity = action.payload.newQuantity;

    let updateProduct = calculation(state.dataProducts!, product);
    updateProduct = { ...updateProduct, id: action.payload.id };

    const newAllProducts = [...state.allProducts];
    newAllProducts[found] = updateProduct;

    const newTotals = calculateTotals(newAllProducts);

    const newState = {
        ...state,
        allProducts: newAllProducts,
        totals: newTotals,
    };

    localStorage.setItem(`calceat_products`, JSON.stringify({
        allProducts: newAllProducts,
        totals: newTotals,
    }));

    return newState;
};
// DELETEPRODUCT
const deleteProduct = (state: calculator_state, action: Action) => {
    const ids = state.allProducts.map((cur) => {
        return cur.id;
    });

    const index = ids.indexOf(action.payload.id);
    let updatedAllProduct = [...state.allProducts];

    if (index !== -1) {
        updatedAllProduct.splice(index, 1);
        const newTotals = calculateTotals(updatedAllProduct);

        const newState = {
            ...state,
            allProducts: updatedAllProduct,
            totals: newTotals,
        };

        localStorage.setItem(`calceat_products`, JSON.stringify({
            allProducts: updatedAllProduct,
            totals: newTotals,
        }));

        return newState;
    } else {
        return state;
    }
};
// DELETEALLPRODUCTS
const deleteAllProducts = (state: calculator_state, action: Action) => {

    localStorage.removeItem(`calceat_products`);

    return {
        ...state,
        allProducts: [],
        totals: {
            totalGrams: 0,
            totalKcal: 0,
            totalProtein: 0,
            totalCarbs: 0,
            totalFat: 0,
        },
    };
};

export default reducer;