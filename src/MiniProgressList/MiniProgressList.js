import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./mini-progress-list.scss";

export function MiniProgressList({ items }) {
  const handleScrollTo = (element) => () => {
    element.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="miniProgressList">
      {items.map(({ number, complete, scrollTo }) => (
        <div
          className={cn("miniProgressList__number", {
            "miniProgressList__number--complete": complete,
          })}
          onClick={scrollTo && handleScrollTo(scrollTo)}
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
