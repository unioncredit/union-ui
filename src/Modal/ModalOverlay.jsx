import React from "react";
import PropTypes from "prop-types";

import "./modal-overlay.scss";

export function ModalOverlay({ children }) {
  return <div className="modal-overlay">{children}</div>;
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
};
