import React, { useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Card } from "../Card";
import { Button } from "../Button";
import { useClickOutside } from "../util";

import "./modal.scss";

export function Modal({ children, onClose, title, size }) {
  const ref = useRef(null);

  useClickOutside(ref, onClose);

  return (
    <Card ref={ref} className={cn("modal")} size={size}>
      <Card.Header title={title} align="center" />
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
  title: PropTypes.string.isRequired,
};
