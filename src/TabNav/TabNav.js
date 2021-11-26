import React, { createElement } from "react";
import cn from "classnames";

import "./tab-nav.scss";

function TabNavItem({ as, label, active, ...props }) {
  return createElement(
    as || "div",
    {
      ...props,
      className: cn("tab-nav__item", {
        "tab-nav__item--active": active,
      }),
    },
    label
  );
}

export function TabNav({ items }) {
  return (
    <div className="tab-nav">
      {items.map((item, i) => (
        <TabNavItem {...item} key={i} />
      ))}
    </div>
  );
}
