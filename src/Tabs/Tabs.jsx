import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { ToggleMenu } from "../ToggleMenu";

import "./tabs.scss";

export function Tabs({ items, initialActive, variant, onChange }) {
  return (
    <div className={cn("tabs", { [`tabs--${variant}`]: variant })}>
      <div className="tab__options">
        <ToggleMenu
          variant="nav"
          items={items}
          initialActive={initialActive}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Tabs.propTypes = {
  items: PropTypes.array,
  initialActive: PropTypes.number,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};
