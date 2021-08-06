import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Container, Row as GridRow, Col as GridCol } from "react-grid-system";

import "./grid.scss";

export const Grid = ({ className, bordered, ...props }) => {
  return (
    <Container
      {...props}
      className={cn(className, "grid", { "grid--bordered": bordered })}
    />
  );
};

export const Row = ({ className, ...props }) => (
  <GridRow className={cn(className, "grid-row")} {...props} />
);

export const Col = ({ className, ...props }) => (
  <GridCol className={cn(className, "grid-col")} {...props} />
);

Grid.propTypes = {
  className: PropTypes.string,
  bordered: PropTypes.bool,
};

Row.propTypes = {
  className: PropTypes.string,
};

Col.propTypes = {
  className: PropTypes.string,
};
