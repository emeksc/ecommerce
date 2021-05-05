import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productListReducers } from "./reducers/productReducers";

const initialState = {};
const reducer = combineReducers({
    productList: productListReducers,
});
const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
