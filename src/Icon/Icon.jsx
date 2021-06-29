import React from "react";
import PropTypes from "prop-types";

import * as icons from "./icons";

const titleCase = (str) =>
  str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("");

export function Icon({ name, color }) {
  const IconComponent = icons[titleCase(name)];
  return <IconComponent color={color} />;
}

Icon.propTypes = {
  name: PropTypes.oneOf([
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
    "control-check",
    "control-ideterminate",
    "repayment",
    "borrow",
    "stats",
    "link",
    "locked",
  ]),
  variant: PropTypes.oneOf(["light", "dark"]),
};

Icon.defaultProps = {
  variant: "dark",
};
