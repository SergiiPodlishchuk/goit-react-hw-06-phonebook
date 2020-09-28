import React from "react";
import { CSSTransition } from "react-transition-group";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Alert from "./Alert/Alert";

import "./App.css";

export default function App() {
  return (
    <div className="phoneBook_container">
      <CSSTransition
        in={true}
        appear={true}
        classNames="title_anim"
        timeout={500}
        unmountOnExit
      >
        <h1 className="title">Phonebook</h1>
      </CSSTransition>

      <Alert />

      <CSSTransition
        in={true}
        appear={true}
        classNames="form_fade"
        timeout={500}
        unmountOnExit
      >
        <ContactForm />
      </CSSTransition>
      <Filter />
      <ContactList />
    </div>
  );
}
