import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Card } from "../Card";
import { Box } from "../Box";
import Close from "../icons/close.svg";

import "./modal.scss";

export function Modal({ children, onClose, title, size }) {
  return (
    <Card className={cn("modal")} size={size}>
      <Box
        align="center"
        justify="space-between"
        className="modalHeaderWrapper"
      >
        {title && <Card.Header title={title} align="left" />}
        {onClose && (
          <Box mt="18px" className="closeWrapper">
            <Close width="24px" height="24px" onClick={onClose} />
          </Box>
        )}
      </Box>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
}

Modal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
  children: PropTypes.any,
  onClose: PropTypes.func,
  title: PropTypes.string,
};
