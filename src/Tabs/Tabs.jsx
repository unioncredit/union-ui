import React from "react";

import { ToggleMenu } from "../ToggleMenu";

import "./tabs.scss";

export function Tabs({ items }) {
  return (
    <div className="tabs">
      <div className="tab__options">
        <ToggleMenu variant="nav" items={items} />
      </div>
    </div>
  );
}
