import React from "react";
import PropTypes from "prop-types";

import * as icons from "./nav-icons";
import { titleCase } from "./utils";

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
