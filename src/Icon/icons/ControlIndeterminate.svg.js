import React from "react";
import PropTypes from "prop-types";

export function ControlIndeterminate({ color }) {
  return (
    <svg viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H9" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

ControlIndeterminate.propTypes = {
  color: PropTypes.string,
};

ControlIndeterminate.defaultProps = {
  color: "white",
};
