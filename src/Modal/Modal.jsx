import React from "react";
import cn from "classnames";

import { Card } from "../Card";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

import "./Modal.scss";
import { ArrowLeftIcon, CloseIcon } from "../Icons";

function ModalHeader({ className, onClose, title, subTitle, onBack }) {
  return (
    <div className={className}>
      <Box align="center" justify="space-between" className="modalHeader">
        {onBack && (
          <Button
            className="backButton"
            variant="pill"
            icon={ArrowLeftIcon}
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
            {subTitle && (
              <Text as="label" m={0} grey={600}>
                {subTitle}
              </Text>
            )}
          </div>
        )}
        {onClose && (
          <Box className="closeWrapper" onClick={onClose} align="center" justify="center">
            <CloseIcon width="10px" height="10px" />
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
