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
  subtitle,
  titleTooltip,
  subtitleTooltip,
  subtitleProps,
  barProps,
  className,
  ...props
}) {
  return (
    <Box
      className={cn("NumericalBlock", className, {
        [`NumericalBlock__size-${size}`]: size,
      })}
      direction="vertical"
      {...props}
    >
      <div className="NumericalBlock__title">
        <Heading level={3} grey={500} mb="4px" weight="medium" size="small">
          {title}
          {titleTooltip && (
            <Tooltip {...titleTooltip}>
              <WireInfoIcon width="13px" />
            </Tooltip>
          )}
        </Heading>
      </div>

      {value && (
        <Text className="NumericalBlock__value" grey={800} weight="medium" mb="3px">
          {value}
          {token === "dai" && <DaiIcon className="NumericalBlock__token" />}
          {token === "union" && <UnionIcon className="NumericalBlock__token" />}
        </Text>
      )}

      {barProps && (
        <PercentBar {...barProps} />
      )}

      {subtitle && (
        <Text m={0} className="NumericalBlock__subtitle" {...subtitleProps}>
          {subtitle}
          {subtitleTooltip && (
            <Tooltip {...subtitleTooltip}>
              <WireInfoIcon width="13px" />
            </Tooltip>
          )}
        </Text>
      )}
    </Box>
  );
}

NumericalBlock.defaultProps = {
  size: "large",
};

NumericalBlock.propTypes = {
  size: PropTypes.oneOf(["x-small", "small", "regular", "large"]),
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  token: PropTypes.oneOf(["dai", "union"]),
  subtitle: PropTypes.node,
  titleTooltip: PropTypes.object,
  subtitleTooltip: PropTypes.object,
  subtitleProps: PropTypes.object,
  barProps: PropTypes.object,
};
