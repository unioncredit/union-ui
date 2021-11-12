import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { Button } from "../Button";

import "./alert.scss";

export function Alert({ label, action, variant = "warning" }) {
  return (
    <div className={cn("alert", { [`alert--${variant}`]: variant })}>
      <Text ml="12px" mr="16px" mb={0}>
        {label}
      </Text>
      <div className="alert__action">
        <Button {...action} variant="secondary" />
      </div>
    </div>
  );
}

Alert.propTypes = {
  variant: PropTypes.oneOf(["warning", "info", "success"]),
};
