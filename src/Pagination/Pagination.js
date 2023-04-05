import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";

import "./Pagination.scss";
import ArrowRightIcon from "../Icons/internal/ArrowRight.svg";

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

  const leftArrowDisabled = activePage - 1 <= 0;
  const rightArrowDisabled = activePage + 1 > pages;

  return (
    <Box className="pagination" {...props}>
      <button
        onClick={() => !leftArrowDisabled && onClick(activePage - 1)}
        className={cn(
          "pagination__number",
          "pagination__arrow",
          "pagination__arrow--left",
          { "pagination__arrow--disabled": leftArrowDisabled }
        )}
      >
        <ArrowRightIcon />
      </button>
      {numbers.map((n, i) => (
        <button
          key={i}
          onClick={typeof n === "number" ? () => onClick(n) : undefined}
          className={cn("pagination__number", {
            "pagination__number--active": n === activePage,
            "pagination__number--ellipsis": typeof n !== "number",
          })}
        >
          {n}
        </button>
      ))}
      <button
        onClick={() => !rightArrowDisabled && onClick(activePage + 1)}
        className={cn(
          "pagination__number",
          "pagination__arrow",
          "pagination__arrow--right",
          { "pagination__arrow--disabled": rightArrowDisabled }
        )}
      >
        <ArrowRightIcon />
      </button>
    </Box>
  );
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  activePage: PropTypes.number,
  pages: PropTypes.number.isRequired,
};
