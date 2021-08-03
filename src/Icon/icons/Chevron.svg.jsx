import React from "react";
import PropTypes from "prop-types";

export function Chevron({ color }) {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L4 4L1 7"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

Chevron.propTypes = {
  color: PropTypes.string,
};

Chevron.defaultProps = {
  color: "black",
};
