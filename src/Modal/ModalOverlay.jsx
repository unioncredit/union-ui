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
      onTouchStart={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onTouchMove={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onTouchEnd={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onTouchCancel={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onKeyDown={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onScroll={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onWheel={(e) => { e.stopPropagation(); e.preventDefault(); }}
    >
      {children}
    </div>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
};
