import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./MobileProgressList.scss";

export function MobileProgressList({ items }) {
  const handleScrollTo = (element) => () => {
    element.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="MobileProgressList">
      {items.map(({ number, complete, scrollTo }) => (
        <div
          className={cn("MobileProgressList__number", {
            "MobileProgressList__number--complete": complete,
          })}
          onClick={scrollTo && handleScrollTo(scrollTo)}
        >
          {number}
        </div>
      ))}
    </div>
  );
}

MobileProgressList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      complete: PropTypes.bool,
      number: PropTypes.number.isRequired,
      anchor: PropTypes.string,
    })
  ),
};
