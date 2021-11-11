import React from "react";
import cn from "classnames";

import "./progress-list-item.scss";

export function ProgressListItem({ children, number, complete }) {
  return (
    <div
      className={cn("progressListItem", {
        "progressListItem--complete": complete,
      })}
    >
      <div className="progressListItem__number">{number}</div>
      {children}
    </div>
  );
}
