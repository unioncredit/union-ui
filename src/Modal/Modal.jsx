import React from "react";
import cn from "classnames";

import { Card } from "../Card";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

import Close from "../icons/close.svg";
import LArrow from "../icons/arrowRight.svg";

import "./modal.scss";

function ModalHeader({ className, onClose, title, onBack }) {
  return (
    <div className={className}>
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
    </div>
  );
}

export function Modal({ className, children, size }) {
  return (
    <Card className={cn("modal", className)} size={size}>
      {children}
    </Card>
  );
}

Modal.Header = ModalHeader;
Modal.Body = Card.Body;
