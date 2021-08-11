import React from "react";
import PropTypes from "prop-types";

import "./avatar.scss";

export function Avatar({ src, size }) {
  return (
    <div
      className="avatar"
      style={{
        width: size + "px",
        height: size + "px",
      }}
    >
      {src && <img src={src} />}
    </div>
  );
}

Avatar.defaultProps = {
  size: 24,
};

Avatar.propTypes = {
  size: PropTypes.number,
};
