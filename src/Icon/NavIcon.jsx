import React from "react";
import PropTypes from "prop-types";

import * as icons from "./nav-icons";
import { titleCase } from "./utils";
import { colorHex } from "../colors";

export function NavIcon({ name, color }) {
  const IconComponent = icons[titleCase(name)];
  return (
    <IconComponent
      className={`nav-icon--${name}`}
      color={colorHex(color) || "black"}
    />
  );
}

NavIcon.defaultProps = {
  color: "black",
};

NavIcon.propTypes = {
  name: PropTypes.oneOf([
    "activity",
    "activity-new",
    "contacts",
    "credit",
    "get-started",
    "vault",
    "vote",
    "union-token",
  ]),
};
