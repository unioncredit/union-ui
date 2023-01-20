import React from "react";
import cn from "classnames";

import { Button } from "../Button";
import { Collapse } from "../Collapse";
import { Text } from "../Text";

import "./multi-step-button.scss";

export function MultiStepButton({ id, items, action, label, showSteps }) {
  return (
    <div
      className={cn("multiStepButton", {
        "multiStepButton--showSteps": showSteps,
      })}
    >
      <Collapse id={id || "multiStepButton"} active={showSteps}>
        <div className="multiStepButton__header">
          <div className="multiStepButton__progressList">
            {items.map(({ number, status }) => (
              <div
                className={cn("multiStepButton__progressList__number", {
                  [`multiStepButton__progressList__number--${status}`]: status,
                })}
              >
                {number}
              </div>
            ))}
          </div>
          {label && (
            <Text as="label" m={0} size="small" color="blue500">
              {label}
            </Text>
          )}
        </div>
      </Collapse>
      {action && <Button className="multiStepButton__action" {...action} />}
    </div>
  );
}
