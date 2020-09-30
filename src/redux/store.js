import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../redux/contacts/contactReducer";

const preloadedState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const persistedState = localStorage.getItem("contacts")
  ? JSON.parse(localStorage.getItem("contacts"))
  : {};

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  persistedState,
});

store.subscribe(() => {
  localStorage.setItem("contacts", JSON.stringify(store.getState()));
});

export default store;

//   componentDidMount() {
//     const contacts = localStorage.getItem("contacts");
//     if (contacts) {
//       this.setState({
//         contacts: JSON.parse(contacts),
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const { contacts } = this.state;
//     if (prevState.contacts !== contacts) {
//       localStorage.setItem("contacts", JSON.stringify(contacts));
//     }
//   }
