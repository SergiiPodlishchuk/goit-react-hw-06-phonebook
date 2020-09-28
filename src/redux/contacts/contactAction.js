import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import contactTypes from "./contactTypes";

const addContact = createAction("contact/addContact", ({ name, number }) => ({
  payload: {
    contact: {
      id: uuidv4(),
      name,
      number,
    },
  },
}));

// const addContact = ({ name, number }) => {
//   return {
//     type: contactTypes.ADD,
//     payload: {
//       contact: {
//         id: uuidv4(),
//         name,
//         number,
//       },
//     },
//   };
// };

const removeContact = createAction("contact/removeContact");

// const removeContact = (contactId) => {
//   return {
//     type: contactTypes.REMOVE,
//     payload: {
//       id: contactId,
//     },
//   };
// };

const changeFilter = createAction("contact/changeFilter");

// const changeFilter = (filter) => {
//   return {
//     type: contactTypes.CHANGE_FILTER,
//     payload: {
//       filter,
//     },
//   };
// };

export default {
  addContact,
  removeContact,
  changeFilter,
};
