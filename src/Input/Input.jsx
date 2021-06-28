import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import "./input.scss";

export function Input({ name, label, caption, placeholder, disabled, value }) {
  const [hasValue, setHasValue] = useState(false);

  const handleChange = (event) => {
    setHasValue(event.target.value !== "");
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className="input-label" for={name}>
          {label}
        </label>
      )}
      <div
        className={cn("input", {
          "input--disabled": disabled,
          "input--has-value": hasValue,
        })}
      >
        <button className="input__max-button">Max.</button>
        <input
          name={name}
          disabled={disabled}
          onChange={handleChange}
          value={value}
        />
        {placeholder && <div className="input__placeholder">{placeholder}</div>}
      </div>
      {caption && <div className="input-caption">{caption}</div>}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  disabled: false,
};
