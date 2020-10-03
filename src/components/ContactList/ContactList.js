import React from "react";
import { connect } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import contactAction from "../../redux/contacts/contactAction";

import ContactListItem from "./ContactListItem";

import "./ContacList.css";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="contact_list">
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames="list">
          <ContactListItem id={id} name={name} number={number} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state, prop) => {
  const { items, filter } = state.contacts;
  console.log(items);

  const loc = JSON.parse(localStorage.getItem("contacts"));
  console.log(loc);

  if (loc !== items) {
    localStorage.setItem("contacts", JSON.stringify(items));
  }

  const visibleContacts = loc.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return { contacts: visibleContacts };
};

export default connect(mapStateToProps, null)(ContactList);
