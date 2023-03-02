import "./DistributionBar.scss";

import React from "react";
import PropTypes from "prop-types";

export function DistributionBar({ items }) {
  const total = items.reduce((acc, curr) => acc + curr.value, 0);
  let offset = 0;

  return (
    <div className="DistributionBar">
      {items.map(item => {
        const percentage = (item.value / total) * 100;
        offset += percentage;

        return (
          <div
            className="DistributionBar__item"
            style={{
              background: item.color,
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