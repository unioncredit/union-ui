import React from "react";
import PropTypes from "prop-types";

import * as icons from "./icons";

const titleCase = (str) =>
  str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

export function ButtonIcon({ name, color }) {
  const IconComponent = icons[titleCase(name)];
  return <IconComponent color={color} />;
}

ButtonIcon.propTypes = {
  type: PropTypes.oneOf([
    "telegram",
    "twitter",
    "link",
    "manage",
    "vouch",
    "proposal",
    "repayment",
    "borrow",
    "stats",
    "icons",
    "locked",
    "check",
    "no",
    "chevron",
  ]),
  variant: PropTypes.oneOf(["light", "dark"]),
};

ButtonIcon.defaultProps = {
  variant: "dark",
};
