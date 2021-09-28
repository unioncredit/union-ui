import React from "react";
import PropTypes from "prop-types";

import * as icons from "./icons";
import { titleCase } from "./utils";

import "./icon.scss";

export function Icon({ name, color }) {
  const IconComponent = icons[titleCase(name)];
  return <IconComponent color={color} />;
}

Icon.propTypes = {
  color: PropTypes.string,
  name: PropTypes.oneOf([
    "dropdown-arrow",
    "avatar",
    "dollar",
    "members",
    "external",
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
    "search",
    "chevron",
    "control-check",
    "control-ideterminate",
    "repayment",
    "borrow",
    "stats",
    "link",
    "locked",
    "info",
    "arrow-left",
  ]),
};
