// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactReducer";

// const rootReducer = combineReducers({
//   contacts: contactReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
