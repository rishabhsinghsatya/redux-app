import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

//createStore take (reducers, initial state, middleware)
export const store = createStore(reducers, {}, applyMiddleware(thunk));
