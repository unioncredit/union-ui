import React from "react";
import PropTypes from "prop-types";

import "./usage-chart.scss";

export function UsageChart({ data, height }) {
  const total = data.reduce((acc, n) => acc + n, 0);
  const percentages = data.map((n) => n / total);

  return (
    <div className="usageChart">
      {percentages.map((percentage, i) => (
        <div
          key={i}
          className="usageChart__section"
          style={{
            height: `${height}px`,
            width: `${percentage * 100}%`,
          }}
        />
      ))}
    </div>
  );
}

UsageChart.defaultProps = {
  height: 28,
};

UsageChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number),
};
