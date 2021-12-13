import React from "react";
import PropTypes from "prop-types";

import "./modal-overlay.scss";

export function ModalOverlay({ children, onClick }) {
  const handleClick = (event) => {
    if (event.target.className === "modal-overlay") {
      onClick();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClick}>
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
