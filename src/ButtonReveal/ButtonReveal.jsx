import "./ButtonReveal.scss";

import React, { useState } from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import { Button } from "../Button";
import { Box } from "../Box";
import { Text } from "../Text";

export function ButtonReveal({
  title,
  closeLabel,
  buttonProps,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = useState(false);

  return (
    <Box className={cn("ButtonReveal", className)} {...props}>
      {open ? (
        <Box className="ButtonReveal__content" direction="vertical">
          <Box
            fluid
            as="header"
            align="center"
            justify="space-between"
            className="ButtonReveal__header"
          >
            <Text size="medium" className="ButtonReveal__title">
              {title}
            </Text>

            <Button
              size="pill"
              color="secondary"
              variant="light"
              label={closeLabel}
              className="ButtonReveal__cancel"
              onClick={() => setOpen(false)}
            />
          </Box>

          {children}
        </Box>
      ) : (
        <Button
          className="ButtonReveal__button"
          {...buttonProps}
          onClick={() => setOpen(true)}
        />
      )}
    </Box>
  )
}

ButtonReveal.propTypes = {
  title: PropTypes.string,
  closeLabel: PropTypes.string,
  buttonProps: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

ButtonReveal.defaultProps = {
  closeLabel: "Cancel",
};