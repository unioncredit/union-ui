import React, { useState } from "react";
import cn from "classnames";

import "./toggle.scss";

export function Toggle({ initialState, onChange }) {
  const [active, setActive] = useState(initialState);

  const handleChange = () => {
    setActive((x) => !x);
    onChange && onChange(active);
  };

  return (
    <div
      className={cn("toggle", { "toggle--active": active })}
      onClick={handleChange}
    >
      <div className="toggle__switch" />
    </div>
  );
}
