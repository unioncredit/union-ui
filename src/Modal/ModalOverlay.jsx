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
    <div
      className="modal-overlay"
      onClick={handleClick}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
      onTouchCancel={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
      onScroll={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
