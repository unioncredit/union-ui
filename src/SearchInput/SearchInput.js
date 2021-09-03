import React, { forwardRef } from "react";

import { Input } from "../Input";
import { Icon } from "../Icon";

import "./search-input.scss";

export const SearchInput = forwardRef((props, ref) => {
  return (
    <div className="search-input-wrapper">
      <Icon name="search" color="#726F7E" />
      <Input {...props} ref={ref} />
    </div>
  );
});
