import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactAction from "./contactAction";

const onAddContact = (state, { payload }) => [payload.contact, ...state];

const onRemoveContact = (state, { payload }) =>
  state.filter(({ id }) => id !== payload);

const items = createReducer([], {
  [contactAction.addContact]: onAddContact,
  [contactAction.removeContact]: onRemoveContact,
});

const filter = createReducer("", {
  [contactAction.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
