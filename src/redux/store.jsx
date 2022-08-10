import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import TodoReducer from "./reducer/TodoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(
  TodoReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
