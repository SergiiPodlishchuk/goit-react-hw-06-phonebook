import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

// import contactTypes from "./contactTypes";
import contactAction from "./contactAction";

const CONTACTS_DATA = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const onAddContact = (state = CONTACTS_DATA, action) => [
  action.payload.contact,
  ...state,
];
const onRemoveContact = (state, action) =>
  state.filter(({ id }) => id !== action.payload);

const itemsTestReducer = createReducer([], {
  [contactAction.addContact]: onAddContact,
  [contactAction.removeContact]: onRemoveContact,
});

// const items = (state = CONTACTS_DATA, { type, payload }) => {
//   switch (type) {
//     case contactTypes.ADD:
//       return [payload.contact, ...state];
//     case contactTypes.REMOVE:
//       return state.filter(({ id }) => id !== payload.id);

//     default:
//       return state;
//   }
// };
const items = (state = CONTACTS_DATA, { type, payload }) => {
  switch (type) {
    case contactAction.addContact.type:
      return [payload.contact, ...state];
    case contactAction.removeContact.type:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactTypes.CHANGE_FILTER:
//       return payload.filter;

//     default:
//       return state;
//   }
// };
const filter = createReducer("", {
  [contactAction.changeFilter]: (state, action) => action.payload,
});

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case contactAction.changeFilter.type:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items: itemsTestReducer,
  filter,
});
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
