import "./Card.scss";

import React, { forwardRef } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Text } from "../Text";
import { propsToStyles } from "../spacing";

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
        className={cn("Card", className, {
          [`Card--${size}`]: size,
          [`Card--${variant}`]: variant,
          ["Card--packed"]: packed,
          "Card--bordered": bordered,
          "Card--overflow": overflow,
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
      className={cn("Card__header", {
        [`Card__header--${align}`]: align,
      })}
      style={propsToStyles(props)}
    >
      <div className="Card__header__content">
        <Text as="h1" size="large" grey={700} weight="medium" m={0}>
          {title}
        </Text>
        {subTitle && (
          <Text as="h2" mb="0px" color="grey500">
            {subTitle}
          </Text>
        )}
      </div>
      {action && <div className="Card__header__action">{action}</div>}
    </div>
  );
}

function CardBody({ children, ...props }) {
  return (
    <div className="Card__body" style={propsToStyles(props)}>
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
