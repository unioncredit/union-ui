import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import {
  Container,
  Row as GridRow,
  Col as GridCol,
  setConfiguration,
} from "react-grid-system";

import "./grid.scss";

export const setGridConfiguration = setConfiguration;

export const Grid = ({ className, bordered, ...props }) => {
  return (
    <Container
      {...props}
      fluid
      className={cn(className, "grid", { "grid--bordered": bordered })}
    />
  );
};

export const Row = ({ className, noGutter, ...props }) => (
  <GridRow
    className={cn(className, "grid-row")}
    nogutter={noGutter}
    {...props}
  />
);

export const Col = ({ className, noPadding, ...props }) => (
  <GridCol
    className={cn(className, "grid-col", { "grid-col--noPadding": noPadding })}
    {...props}
  />
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
