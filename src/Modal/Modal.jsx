import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Card } from "../Card";
import { Button } from "../Button";

import "./modal.scss";

export function Modal({ children, onClose, title, size }) {
  return (
    <Card className={cn("modal")} size={size}>
      {title && <Card.Header title={title} align="center" />}
      <Card.Body>
        {children}
        <Button
          mt="10px"
          variant="secondary"
          onClick={onClose}
          label="Close"
          fluid
        />
      </Card.Body>
    </Card>
  );
}

Modal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
  children: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string,
};
