import "./OptionCard.scss";

import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Box } from "../Box";
import { Control } from "../Control";
import { Text } from "../Text";
import { DaiIcon, UnionIcon } from "../Icons";
import InfoOutlinedIcon from "../Icons/internal/InfoOutlined.svg";
import { Tooltip } from "../Tooltip";

export function OptionCard({
  title,
  content,
  checked,
  value,
  token,
  tooltip,
  ...props
}) {
  return (
    <Box {...props} align="center" justify="space-between" className={cn("OptionCard", {
      "OptionCard--checked": checked,
    })}>
      <Box align="center" className="OptionCard__left">
        <Control
          type="radio"
          checked={checked}
        />

        <Box p="0 12px" direction="vertical">
          <Box>
            {title && (
              <Text grey={800} size="medium" weight="medium" className="OptionCard__title">
                {title}
              </Text>
            )}

            {tooltip && (
              <Tooltip ml="4px" mt="5px" {...tooltip}>
                <InfoOutlinedIcon width="13px" />
              </Tooltip>
            )}
          </Box>

          {content && (
            <Text grey={600} className="OptionCard__content">
              {content}
            </Text>
          )}
        </Box>
      </Box>

      {value && (
        <Box className="OptionCard__value" align="center">
          <Text m={0} size="large" weight="medium" grey={700}>
            {value}
          </Text>

          {token === "dai" && <DaiIcon className="OptionCard__token" />}
          {token === "union" && <UnionIcon className="OptionCard__token" />}
        </Box>
      )}
    </Box>
  )
}

OptionCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  token: PropTypes.oneOf(["dai", "union"])
};