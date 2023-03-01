import "./Stat.scss";

import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Tooltip } from "../Tooltip";
import { DaiIcon, UnionIcon, WireInfoIcon } from "../Icons";

export function Stat({
  size,
  title,
  value,
  token,
  subtitle,
  titleTooltip,
  subtitleTooltip,
  progressPercent,
  className,
  ...props
}) {
  return (
    <Box
      className={cn("Stat", className, {
        [`Stat__size-${size}`]: size,
      })}
      direction="vertical"
      {...props}
    >
      <div className="Stat__title">
        <Heading level={3} grey={500} mb="4px" weight="medium" size="small">
          {title}
          {titleTooltip && (
            <Tooltip {...titleTooltip}>
              <WireInfoIcon width="13px" />
            </Tooltip>
          )}
        </Heading>
      </div>
      <Text className="Stat__value" grey={800} weight="medium" mb="3px">
        {value}
        {token === "dai" && <DaiIcon className="Stat__token" />}
        {token === "union" && <UnionIcon className="Stat__token" />}
      </Text>

      {/*{progressPercent && (*/}

      {/*)}*/}

      {subtitle && (
        <Text m={0} className="Stat__subtitle">
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

Stat.defaultProps = {
  size: "large",
};

Stat.propTypes = {
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
  progressPercent: PropTypes.number,
};
