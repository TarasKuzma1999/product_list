import { applyMiddleware, combineReducers, createStore } from "redux";
import productListReducer from "./productListReducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    productList: productListReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
