import "./HiddenInput.scss";

import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { Box } from "../Box";
import { Text } from "../Text";
import { Divider } from "../Divider";

export function HiddenInput({
  title,
  closeLabel,
  buttonProps,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box className={cn("HiddenInput", className)} {...props}>
      {open ? (
        <Box className="HiddenInput__content" direction="vertical">
          <Box
            fluid
            as="header"
            align="center"
            justify="space-between"
            className="HiddenInput__header"
          >
            <Text m={0} size="medium" className="HiddenInput__title">
              {title}
            </Text>

            <Button
              size="pill"
              color="secondary"
              variant="light"
              label={closeLabel}
              className="HiddenInput__cancel"
              onClick={() => setOpen(false)}
            />
          </Box>

          <Divider m="12px 0" className="HiddenInput__divider" />

          {children}
        </Box>
      ) : (
        <Button
          className="HiddenInput__button"
          {...buttonProps}
          onClick={() => setOpen(true)}
        />
      )}
    </Box>
  )
}

HiddenInput.propTypes = {
  title: PropTypes.string,
  closeLabel: PropTypes.string,
  buttonProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

HiddenInput.defaultProps = {
  closeLabel: "Cancel",
};