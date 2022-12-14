// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
// ROUTING
import { BrowserRouter } from 'react-router-dom';
// REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// REDUCERS
import authReducer from './store/reducers/auth';
import calculatorReducer from './store/reducers/calculator';
import addProductReducer from './store/reducers/addProduct';
import cookiesAgreementReducer from './store/reducers/cookiesAgreement';

// const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;


const rootReducer = combineReducers({
  auth: authReducer,
  calculator: calculatorReducer,
  addProduct: addProductReducer,
  cookiesAgreement: cookiesAgreementReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
