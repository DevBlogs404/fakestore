import { combineReducers } from "redux";
import { cartData } from "./reducers";
import { productData } from "./productReducer";
// all reducers are combined in a root reducer and root redcucer communicates with the redux store
export default combineReducers({ cartData, productData });
