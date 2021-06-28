import React from "react";
import PropTypes from "prop-types";

export function ArrowLeft({ color }) {
  return (
    <svg viewBox="0 0 9 8" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <polygon
          id="Path"
          fill={color}
          points="3.81648 7.63807 4.53239 6.92614 2.04659 4.44432 8.29091 4.44432 8.29091 3.41023 2.04659 3.41023 4.53239 0.92443 3.81648 0.21648 0.105682 3.92727"
        ></polygon>
      </g>
    </svg>
  );
}

ArrowLeft.propTypes = {
  color: PropTypes.string,
};

ArrowLeft.defaultProps = {
  color: "black",
};
