import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import contactAction from "../../redux/contacts/contactAction";
import ContactListItem from "./ContactListItem";

import "./ContacList.css";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_list">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames="list">
          <ContactListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      number.toLowerCase().includes(filter.toLowerCase())
  );
  return { contacts: visibleContacts };
};

export default connect(mapStateToProps)(ContactList);
