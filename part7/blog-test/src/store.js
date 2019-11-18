import { createStore, combineReducers, applyMiddleware } from "redux";
import blogReducer from "./reducers/blogReducer";
import notificationReducer from "./reducers/notificationReducer";
import searchReducer from "./reducers/searchReducer";
import filterReducer from "./reducers/filterReducer";
import userReducer from "./reducers/userReducer";
import loginReducer from "./reducers/loginReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  blogs: blogReducer,
  notification: notificationReducer,
  search: searchReducer,
  filter: filterReducer,
  users: userReducer,
  loggedUser: loginReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
