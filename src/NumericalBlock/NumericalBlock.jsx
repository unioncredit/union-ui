import "./NumericalBlock.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Tooltip } from "../Tooltip";
import { DaiIcon, UnionIcon, WireInfoIcon } from "../Icons";
import { PercentBar } from "../PercentBar";

export function NumericalBlock({
  size,
  title,
  value,
  token,
  align,
  after,
  subtitle,
  titleTooltip,
  subtitleTooltip,
  subtitleProps,
  barProps,
  dotColor,
  className,
  ...props
}) {
  return (
    <Box
      className={cn("NumericalBlock", className, {
        [`NumericalBlock__size-${size}`]: size,
        [`NumericalBlock__align-${align}`]: align,
      })}
      direction="vertical"
      {...props}
    >
      <Box className="NumericalBlock__title" align="center">
        {dotColor && (
          <span
            className={cn("NumericalBlock__dot", {
              [`NumericalBlock__dot--${dotColor}`]: dotColor,
            })}
            style={{
              backgroundColor: dotColor,
            }}
          />
        )}

        <Heading level={3} grey={500} m={0} weight="medium" size="small">
          {title}
          {titleTooltip && (
            <Tooltip {...titleTooltip}>
              <WireInfoIcon width="13px" />
            </Tooltip>
          )}
        </Heading>
      </Box>

      {value && (
        <Text className="NumericalBlock__value" m="4px 0 0" grey={800} weight="medium">
          {value}
          {token === "dai" && <DaiIcon className="NumericalBlock__token" />}
          {token === "union" && <UnionIcon className="NumericalBlock__token" />}
        </Text>
      )}

      {barProps && (
        <PercentBar mt="3px" {...barProps} />
      )}

      {subtitle && (
        <Text m="3px 0 0" className="NumericalBlock__subtitle" {...subtitleProps}>
          {subtitle}
          {subtitleTooltip && (
            <Tooltip {...subtitleTooltip}>
              <WireInfoIcon width="13px" />
            </Tooltip>
          )}
        </Text>
      )}

      {after && after}
    </Box>
  );
}

NumericalBlock.defaultProps = {
  size: "large",
  align: "center",
};

NumericalBlock.propTypes = {
  size: PropTypes.oneOf(["x-small", "small", "medium", "regular", "large"]),
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  token: PropTypes.oneOf(["dai", "union"]),
  align: PropTypes.oneOf(["left", "center"]),
  after: PropTypes.node,
  subtitle: PropTypes.node,
  titleTooltip: PropTypes.object,
  subtitleTooltip: PropTypes.object,
  subtitleProps: PropTypes.object,
  barProps: PropTypes.object,
  dotColor: PropTypes.string,
};
