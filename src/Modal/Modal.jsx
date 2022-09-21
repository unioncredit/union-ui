import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import { Card } from "../Card";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

import Close from "../icons/close.svg";
import LArrow from "../icons/arrowRight.svg";

import "./modal.scss";

export function Modal({
  className,
  children,
  onClose,
  title,
  size,
  footer,
  onBack,
}) {
  return (
    <Card className={cn("modal", className)} size={size}>
      {(onBack || title || onClose) && (
        <Box align="center" justify="space-between" className="modalHeader">
          {onBack && (
            <Button
              className="backButton"
              variant="pill"
              icon={LArrow}
              label="Previous"
              onClick={onBack}
            />
          )}
          {title && (
            <div className="modal__title">
              <Text
                as="h1"
                size="large"
                align={onBack ? "center" : "left"}
                grey={700}
                weight="medium"
                m={0}
              >
                {title}
              </Text>
            </div>
          )}
          {onClose && (
            <Box className="closeWrapper">
              <Close width="24px" height="24px" onClick={onClose} />
            </Box>
          )}
        </Box>
      )}
      <Card.Body>{children}</Card.Body>
      {footer && <div className="modal__footer">{footer}</div>}
    </Card>
  );
}

Modal.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large", "fluid"]),
  children: PropTypes.any,
  onClose: PropTypes.func,
  onBack: PropTypes.func,
  title: PropTypes.string,
  footer: PropTypes.any,
  className: PropTypes.string,
};
