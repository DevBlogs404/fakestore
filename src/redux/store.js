import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import productSaga from './productSaga';

const sagaMiddleware =  createSagaMiddleware();

const store = configureStore({
    reducer : rootReducer,                   //rootReducer will be passed in ths
    middleware :() => [sagaMiddleware] 
});               

sagaMiddleware.run(productSaga);
export default store;
