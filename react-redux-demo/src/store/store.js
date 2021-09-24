import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoReducer from "./todos/todoReducer";

const composeEnhancers = composeWithDevTools({});
const stroe = createStore(todoReducer, composeEnhancers());

export default stroe;
