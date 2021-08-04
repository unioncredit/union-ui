import React from "react";

import { ToggleMenu } from "../ToggleMenu";

import "./tabs.scss";

export function Tabs({ items, initialActive }) {
  return (
    <div className="tabs">
      <div className="tab__options">
        <ToggleMenu variant="nav" items={items} initialActive={initialActive} />
      </div>
    </div>
  );
}
