import React from "react";
import PropTypes from "prop-types";

export function Filter({ color }) {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H11"
        stroke="#292524"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 5H10"
        stroke="#292524"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 9H9"
        stroke="#292524"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

Filter.defaultProps = {
  color: "black",
};

Filter.propTypes = {
  color: PropTypes.string,
};
