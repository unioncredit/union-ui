import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./toggle.scss";

export function Toggle({ initialState, label, onChange }) {
  const [active, setActive] = useState(initialState);

  const handleChange = () => {
    setActive((x) => !x);
    onChange && onChange(active);
  };

  return (
    <div class="toggle-wrapper">
      <div
        className={cn("toggle", { "toggle--active": active })}
        onClick={handleChange}
      >
        <div className="toggle__switch" />
      </div>
      {label && <p className="toggle-label">{label}</p>}
    </div>
  );
}

Toggle.propTypes = {
  label: PropTypes.string,
  initialState: PropTypes.bool,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  initialState: false,
};
