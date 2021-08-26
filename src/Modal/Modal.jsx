import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Heading } from "../Heading";
import { Divider } from "../Divider";
import { Card } from "../Card";

import "./modal.scss";

export function Modal({ children, onClose, title, drawer, size }) {
  return (
    <Card className={cn("modal", { "modal--drawer": drawer })} size={size}>
      <div className="modal__header">
        <Heading>{title}</Heading>
        <div className="modal__header__close" onClick={onClose}></div>
      </div>
      <Divider />
      {children}
    </Card>
  );
}

Modal.Body = ({ className, ...props }) => (
  <Card.Body className={cn("modal__content", className)} {...props} />
);

Modal.Footer = ({ className, ...props }) => (
  <Card.Footer className={cn("modal__footer", className)} {...props} />
);

Modal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
  children: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string.isRequired,
  drawer: PropTypes.bool,
};
