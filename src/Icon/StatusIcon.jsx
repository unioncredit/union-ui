import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import * as icons from "./status-icons";
import { titleCase } from "./utils";

import "./status-icon.scss";

export function StatusIcon({ name, variant }) {
  const IconComponent = icons[titleCase(name)];
  return (
    <div
      className={cn(
        "status-icon",
        `status-icon--${name}`,
        `status-icon--${variant}`
      )}
    >
      <IconComponent />
    </div>
  );
}

StatusIcon.propTypes = {
  variant: PropTypes.oneOf(["wire", "solid"]),
  name: PropTypes.oneOf(["pending", "success", "error"]),
};

StatusIcon.defaultProps = {
  name: "pending",
  variant: "solid",
};
