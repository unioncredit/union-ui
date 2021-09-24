import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";

import "./pagination.scss";

export function Pagination({ onClick, pages, activePage = 1, ...props }) {
  if (pages <= 1) {
    return null;
  }

  const nPages = Array.from(Array(pages), (_, i) => i + 1);

  const nStart =
    activePage > pages - 3 ? pages - 2 : activePage <= 1 ? 2 : activePage;

  const numbers =
    pages > 4
      ? [...nPages.slice(nStart - 2, nStart), "...", ...nPages.slice(-2)]
      : nPages;

  return (
    <Box className="pagination" {...props}>
      {numbers.map((n) => (
        <button
          onClick={typeof n === "number" ? () => onClick(n) : undefined}
          className={cn("pagination__number", {
            "pagination__number--active": n === activePage,
            "pagination__number--ellipsis": typeof n !== "number",
          })}
        >
          {n}
        </button>
      ))}
    </Box>
  );
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  activePage: PropTypes.number,
  pages: PropTypes.number.isRequired,
};
