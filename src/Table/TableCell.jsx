import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./table-cell.scss";

export function TableCell({ children, span, align, weight, className, fixedSize }) {
  return (
    <td
      className={cn("table-cell", className, {
        [`table-cell--align-${align}`]: align,
        [`table-cell--weight-${weight}`]: weight,
        "table-cell--fixed-size": fixedSize,
      })}
      colSpan={span}
    >
      {children}
    </td>
  );
}

TableCell.propTypes = {
  span: PropTypes.number,
  align: PropTypes.oneOf(["center", "left", "right"]),
};
