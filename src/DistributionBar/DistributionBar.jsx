import "./DistributionBar.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { propsToStyles } from "../spacing";

export function DistributionBar({ items, ...props }) {
  const total = items.reduce((acc, curr) => acc + curr.value, 0);
  let offset = 0;

  return (
    <div className="DistributionBar" style={propsToStyles(props)}>
      {items.map((item, index) => {
        const percentage = (item.value / total) * 100;
        offset += percentage;

        return (
          <div
            key={index}
            className={cn("DistributionBar__item", {
              [`DistributionBar__item-color--${item.color}`]: item.color
            })}
            style={{
              width: `${percentage}%`,
              left: `${offset - percentage}%`,
            }}
          ></div>
        )
      })}
    </div>
  )
}

DistributionBar.propTypes = {
  items: PropTypes.array,
}