import React from "react";
import cn from "classnames";

import "./progress-bar.scss";

export function ProgressBar({ percentage, completeText, completeIcon: Icon }) {
  const isComplete = percentage >= 100;

  return (
    <div className={cn("progressBar", { "progressBar--complete": isComplete })}>
      <div className="progressBar__inner">
        <div
          className="progressBar__progress"
          style={{ width: `${percentage}%` }}
        ></div>
        {isComplete && (
          <div className="progressBar__completeLabel">
            {Icon && <Icon width="20px" />} {completeText}
          </div>
        )}
      </div>
    </div>
  );
}
