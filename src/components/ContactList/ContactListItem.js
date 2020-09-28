import React from "react";
import { connect } from "react-redux";

import contactAction from "../../redux/contacts/contactAction";
import "./ContacList.css";

const ContactListItem = ({ name, number, onDeleteContact }) => (
  <li className="phone_Item">
    <span className="phone_name">{name}</span>
    <span className="phone_number">{number}</span>
    <button type="button" onClick={onDeleteContact}></button>
  </li>
);

const mapStateToProps = (state, ownProps) => {
  const item = state.contacts.items.find((item) => item.id === ownProps.id);
  return {
    ...item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDeleteContact: () => dispatch(contactAction.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);
