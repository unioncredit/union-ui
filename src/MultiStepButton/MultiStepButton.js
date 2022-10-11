import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { Label } from "../Label";

import "./multi-step-button.scss";
import { Collapse } from "../Collapse";

export function MultiStepButton({ items, action, label, showSteps }) {
  return (
    <div className="multiStepButton">
      <Collapse active={showSteps}>
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
            <Label m={0} size="small" color="blue500">
              {label}
            </Label>
          )}
        </div>
      </Collapse>
      {action && <Button className="multiStepButton__action" {...action} />}
    </div>
  );
}

MultiStepButton.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(["selected", "pending", "complete"]),
      number: PropTypes.number.isRequired,
    })
  ),
  action: PropTypes.node,
  label: PropTypes.node,
};

