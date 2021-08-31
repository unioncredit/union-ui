import React from "react";
import PropTypes from "prop-types";

import "./modal-overlay.scss";

export function ModalOverlay({ children, onClick }) {
  return (
    <div className="modal-overlay" onClick={onClick}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.function,
};
