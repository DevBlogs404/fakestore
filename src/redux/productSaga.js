import { takeEvery, put } from 'redux-saga/effects';
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';

function* getProductData(){
 let data = yield fetch("https://fakestoreapi.com/products");
 data = yield data.json();
yield put({ type: SET_PRODUCT_LIST, data});
// console.log(data);
}

function* productSaga(){
 yield takeEvery(PRODUCT_LIST,getProductData);
//  yield takeEvery(SET_PRODUCT_LIST,setProductList);
}

export default productSaga;