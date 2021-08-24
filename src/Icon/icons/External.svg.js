import React from "react";
import PropTypes from "prop-types";

export function External({ color }) {
  return (
    <svg
      className="icon-external"
      width="8"
      height="9"
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.814621 8.01044L6.87206 1.94256L6.86162 6.62141H8V0H1.38903L1.37859 1.12794H6.05744L0 7.19582L0.814621 8.01044Z"
        fill={color}
      />
    </svg>
  );
}

External.propTypes = {
  color: PropTypes.string,
};

External.defaultProps = {
  color: "black",
};
