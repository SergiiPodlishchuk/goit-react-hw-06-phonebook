import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

// console.log(store.getState());

store.subscribe(() => {
  localStorage.setItem(
    "contacts",
    JSON.stringify(store.getState().contacts.items)
  );
});

export default store;
