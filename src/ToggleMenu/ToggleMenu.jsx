import React, { useEffect, useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { ToggleMenuItem } from "./ToggleMenuItem";

import "./toggle-menu.scss";

export function ToggleMenu({
  value,
  items,
  variant,
  onChange,
  initialActive,
  fluid,
}) {
  const [activeIndex, setActiveIndex] = useState(initialActive);

  const handleClick = (index) => () => {
    setActiveIndex(index);
    onChange && onChange(items[index], index);
  };

  // if the toggle menu is controlled when the value changes we
  // update the state
  useEffect(() => {
    if (!value) return;

    const index = items.findIndex((item) => item.id === value);
    if (!!~index) {
      setActiveIndex(index);
    }
  }, [value, items.length]);

  return (
    <Box
      direction="horizontal"
      className={cn("toggle-menu", {
        [`toggle-menu--${variant}`]: variant,
        "toggle-menu--fluid": fluid,
      })}
    >
      {items.map((item, i) => (
        <ToggleMenuItem
          key={item.id || i}
          {...item}
          onClick={handleClick(i)}
          active={i === activeIndex}
        >
          {item.label}
        </ToggleMenuItem>
      ))}
    </Box>
  );
}

ToggleMenu.defaultProps = {
  initialActive: 0,
};

ToggleMenu.propTypes = {
  initialActive: PropTypes.number,
  items: PropTypes.array,
  variant: PropTypes.oneOf(["primary", "nav"]),
};
