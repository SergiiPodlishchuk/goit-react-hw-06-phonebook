import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
