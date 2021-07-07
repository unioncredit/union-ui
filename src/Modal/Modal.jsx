import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../Heading";
import { Divider } from "../Divider";

import "./modal.scss";

export function Modal({ children, onClose, title }) {
  return (
    <div className="modal">
      <div className="modal__header">
        <Heading>{title}</Heading>
        <div className="modal__header__close" onClick={onClose}></div>
      </div>
      <Divider />
      <div className="modal__content">{children}</div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
};
