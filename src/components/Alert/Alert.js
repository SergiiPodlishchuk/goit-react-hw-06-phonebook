import React from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

import "./alert.css";

const Alert = () => (
  <>
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="anim"
      unmountOnExit
    >
      <div className="alert">Contact already exist</div>
    </CSSTransition>
  </>
);

export default connect(null)(Alert);
