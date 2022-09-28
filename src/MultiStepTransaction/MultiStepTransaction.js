import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Button } from "../Button";

import "./multi-step-transaction.scss";

export function MultiStepTransaction({ items, action, label, toggle, initialState }) {
  const [active, setActive] = useState(initialState);

  const handleChange = () => {
    setActive((x) => !x);
    onChange && onChange(active);
  };

  return (
    <div className="multiStepTransaction">
      <div className="multiStepTransaction__header">
        <div className="multiStepTransaction__progressList">
          {items.map(({ number, status }) => (
            <div
              className={cn("multiStepTransaction__progressList__number", {
                [`multiStepTransaction__progressList__number--${status}`]: status,
              })}
            >
              {number}
            </div>
          ))}
        </div>
        <div className="multiStepTransaction__secondaryInfo">
          <div class="multiStepTransaction__toggle-wrapper">
            {label && <p>{label}</p>}
            {toggle &&
              <div
                className={cn("multiStepTransaction__toggle", { "multiStepTransaction__toggle--active": active })}
                onClick={handleChange}
              >
                <div className="toggle__switch" />
              </div>
            }
          </div>
        </div>
      </div>
      {action && (
        <Button className="multiStepTransaction__action" {...action} />
      )}
    </div>
  );
}

MultiStepTransaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      status: PropTypes.oneOf(["selected", "pending", "complete"]),
      number: PropTypes.number.isRequired,
    })
  ),
  action: PropTypes.node,
  label: PropTypes.string,
  toggle: PropTypes.bool,
  initialState: PropTypes.bool,
};

MultiStepTransaction.defaultProps = {
  toggle: false,
  initialState: false,
};