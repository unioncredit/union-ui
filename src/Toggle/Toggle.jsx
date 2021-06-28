import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./toggle.scss";

export function Toggle({ initialState, onChange }) {
  const [active, setActive] = useState(initialState);

  const handleChange = () => {
    setActive((x) => !x);
    onChange && onChange(active);
  };

  return (
    <div
      className={cn("toggle", { "toggle--active": active })}
      onClick={handleChange}
    >
      <div className="toggle__switch" />
    </div>
  );
}

Toggle.propTypes = {
  initialState: PropTypes.bool,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  initialState: false,
};
