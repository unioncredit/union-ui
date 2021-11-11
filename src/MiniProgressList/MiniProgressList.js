import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./mini-progress-list.scss";

export function MiniProgressList({ items }) {
  return (
    <div className="miniProgressList">
      {items.map(({ number, complete }) => (
        <div
          className={cn("miniProgressList__number", {
            "miniProgressList__number--complete": complete,
          })}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

MiniProgressList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      complete: PropTypes.bool,
      number: PropTypes.number.isRequired,
      anchor: PropTypes.string,
    })
  ),
};
