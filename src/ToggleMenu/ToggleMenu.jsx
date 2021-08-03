import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";

import "./toggle-menu.scss";

export function ToggleMenu({ items, variant, onChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => () => {
    setActiveIndex(index);
    onChange && onChange(index, items[index]);
  };

  return (
    <Box
      direction="horizontal"
      className={cn("toggle-menu", {
        [`toggle-menu--${variant}`]: variant,
      })}
    >
      {items.map((item, i) => (
        <button
          {...item}
          onClick={handleClick(i)}
          className={cn("toggle-menu__item", {
            "toggle-menu__item--active": i === activeIndex,
          })}
        >
          {item.label}
        </button>
      ))}
    </Box>
  );
}

ToggleMenu.propTypes = {
  items: PropTypes.array,
  variant: PropTypes.oneOf(["primary", "nav"]),
};
