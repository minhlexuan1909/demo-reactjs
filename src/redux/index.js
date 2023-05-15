// index.js

import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import userReducer from "./reducer";
import middleware from "./middleware";

const rootReducer = combineReducers({
  users: userReducer,
  form: formReducer
});

const store = createStore(rootReducer, middleware);

export default store;
