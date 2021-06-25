import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./button.scss";

export const Button = ({ label, variant, ...props }) => {
  return (
    <button
      type="button"
      className={cn("button", { [`button--${variant}`]: variant })}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "rounded",
    "pill",
    "floating",
  ]),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  onClick: undefined,
};

