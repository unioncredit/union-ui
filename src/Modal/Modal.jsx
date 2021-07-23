import React from "react";
import PropTypes from "prop-types";

import { Heading } from "../Heading";
import { Divider } from "../Divider";
import { Card } from "../Card";

import "./modal.scss";

export function Modal({ children, onClose, title }) {
  return (
    <Card className="modal">
      <div className="modal__header">
        <Heading>{title}</Heading>
        <div className="modal__header__close" onClick={onClose}></div>
      </div>
      <Divider />
      <Card.Body className="modal__content">{children}</Card.Body>
    </Card>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
};
