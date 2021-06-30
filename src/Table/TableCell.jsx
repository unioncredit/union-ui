import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./table-cell.scss";

export function TableCell({ children, span, align }) {
  return (
    <div
      className={cn("table-cell", { [`table-cell--align-${align}`]: align })}
      style={{ flexGrow: span }}
    >
      {children}
    </div>
  );
}

TableCell.propTypes = {
  span: PropTypes.number,
  align: PropTypes.oneOf(["center", "left", "right"]),
};
