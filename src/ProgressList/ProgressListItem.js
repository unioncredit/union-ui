import React from "react";
import cn from "classnames";

import "./ProgressListItem.scss";
import { CheckIcon } from "../Icons";

export function ProgressListItem({ children, number, complete }) {
  return (
    <div
      className={cn("ProgressListItem", {
        "ProgressListItem--complete": complete,
      })}
    >
      <div className="ProgressListItem__number">
        {complete ? (
          <CheckIcon className="ProgressListItem__check" />
        ) : number
        }
      </div>
      {children}
    </div>
  );
}
