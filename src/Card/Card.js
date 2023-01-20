import React, { forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

import "./card.scss";
import { Heading } from "../Heading";

export const Card = forwardRef(
  (
    {
      variant,
      size,
      packed,
      children,
      className,
      bordered,
      onClick,
      overflow,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("card", className, {
          [`card--${size}`]: size,
          [`card--${variant}`]: variant,
          ["card--packed"]: packed,
          "card--bordered": bordered,
          "card--overflow": overflow,
        })}
        style={propsToStyles(props)}
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
);

function CardHeader({ title, subTitle, align, action, ...props }) {
  return (
    <div
      className={cn("card-header", {
        [`card-header--${align}`]: align,
      })}
      style={propsToStyles(props)}
    >
      <div className="card-header__content">
        <Text as="h1" size="large" grey={700} weight="medium" m={0}>
          {title}
        </Text>
        {subTitle && (
          <Heading level={2} mb="0px">
            {subTitle}
          </Heading>
        )}
      </div>
      {action && <div className="card-header__action">{action}</div>}
    </div>
  );
}

function CardBody({ children, ...props }) {
  return (
    <div className="card-body" style={propsToStyles(props)}>
      {children}
    </div>
  );
}

Card.Header = CardHeader;
Card.Body = CardBody;

CardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  align: PropTypes.oneOf(["center", "left", "right"]),
  action: PropTypes.node,
};

Card.propTypes = {
  variant: PropTypes.oneOf(["primary", "blue"]),
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
  className: PropTypes.string,
  onClick: PropTypes.func,
  packed: PropTypes.bool,
};
