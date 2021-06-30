import React, { useState } from "react";
import cn from "classnames";

import { Box } from "../Box";

import "./toggle-menu.scss";

export function ToggleMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => () => {
    setActiveIndex(index);
  };

  return (
    <Box className="toggle-menu" direction="horizontal">
      {items.map((item, i) => (
        <button
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
