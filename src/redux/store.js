import { applyMiddleware, combineReducers, createStore } from "redux";
import productListReducer from "./productListReducer";
import thunkMiddleware from "redux-thunk"
import productReducer from "./productReducer";


let reducers = combineReducers({
    productList: productListReducer,
    product: productReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
