import React from "react";
import PropTypes from "prop-types";

import * as icons from "./nav-icons";

const titleCase = (str) =>
  str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

export function NavIcon({ name }) {
  const IconComponent = icons[titleCase(name)];
  return <IconComponent />;
}

NavIcon.propTypes = {
  name: PropTypes.oneOf([
    "activity",
    "activity-new",
    "contacts",
    "credit",
    "get-started",
    "vault",
    "vote",
  ]),
};
