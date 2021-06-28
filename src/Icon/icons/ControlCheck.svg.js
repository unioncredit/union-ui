import React from "react";
import PropTypes from "prop-types";

export function ControlCheck({ color }) {
  return (
    <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.90743 9.61787C4.28418 9.61787 4.58019 9.47255 4.78471 9.17115L9.79548 1.53391C9.9408 1.31324 10 1.10334 10 0.90958C10 0.387513 9.60172 0 9.06351 0C8.69752 0 8.46609 0.134553 8.24004 0.484392L3.8859 7.35199L1.67922 4.64478C1.4747 4.3972 1.24865 4.28956 0.936491 4.28956C0.392896 4.28956 0 4.67707 0 5.20452C0 5.44133 0.0699677 5.64586 0.274489 5.87729L3.05167 9.21421C3.2831 9.4887 3.55221 9.61787 3.90743 9.61787Z"
        fill={color}
      />
    </svg>
  );
}

ControlCheck.propTypes = {
  color: PropTypes.string,
};

ControlCheck.defaultProps = {
  color: "white",
};
