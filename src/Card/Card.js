import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Heading } from "../Heading";
import { propsToStyles } from "../spacing";

import "./card.scss";

export function Card({ size, children, className, noGutter, ...props }) {
  return (
    <div
      className={cn("card", className, {
        [`card--${size}`]: size,
        "card--noGutter": noGutter,
      })}
      style={propsToStyles(props)}
    >
      {children}
    </div>
  );
}

function CardHeader({ title }) {
  return (
    <div className="card-header">
      <Heading>{title}</Heading>
    </div>
  );
}

function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

Card.Header = CardHeader;
Card.Body = CardBody;

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

Card.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
