import React from "react";
import cn from "classnames";

import { Button } from "../Button";
import { Collapse } from "../Collapse";
import { Text } from "../Text";

import "./MultiStepButton.scss";

export function MultiStepButton({ id, items, action, label, showSteps, toggle: Toggle }) {
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
          {Toggle && <Toggle />}
        </div>
      </Collapse>
      {action && <Button size="large" className="multiStepButton__action" {...action} />}
    </div>
  );
}
