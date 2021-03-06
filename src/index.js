import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore} from 'redux'
import { indexReducer } from './redux/indexReducer';
import { Provider } from 'react-redux';
import { productReducer, productSlice } from './redux-toolkit/productSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        productList: productReducer
    }
})

// const store = createStore(indexReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
//   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
