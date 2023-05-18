import "./Modal.scss";

import React from "react";
import cn from "classnames";

import { Card } from "../Card";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";
import { ArrowLeftIcon } from "../Icons";
import CloseIcon from "../Icons/internal/Close.svg";
import { Heading } from "../Heading";
import PropTypes from "prop-types";

function ModalContainer({ children, className, ...props }) {
  return (
    <Box {...props} className={cn("modal__container", className)} style={{
      padding: "24px",
    }}>
      {children}
    </Box>
  );
}

function ModalHeader({ className, onClose, title, subTitle, onBack, children, noHeight }) {
  return (
    <div className={className}>
      <Box align="center" justify="space-between" className={cn("modalHeader", {
        "modalHeader--noHeight": noHeight,
        "modalHeader--hasBack": onBack,
      })}>
        {onBack && (
          <Button
            size="pill"
            color="secondary"
            variant="light"
            icon={ArrowLeftIcon}
            label="Back"
            onClick={onBack}
            className="backButton"
          />
        )}
        {title && (
          <div className="modal__title">
            <Heading m={0} size="small" align={onBack ? "center" : "left"}>
              {title}
            </Heading>
            {subTitle && (
              <Text as="label" m={0} grey={600}>
                {subTitle}
              </Text>
            )}
          </div>
        )}
        {children && children}
        {onClose && (
          <div className="closeWrapper">
            <Box className="closeButton" onClick={onClose} align="center" justify="center">
              <CloseIcon width="10px" height="10px" />
            </Box>
          </div>
        )}
      </Box>
    </div>
  );
}

function ModalFooter({ children }) {
  return (
    <Box className="modalFooter">
      {children}
    </Box>
  )
}

export function Modal({ animated, className, children, size }) {
  return (
    <Card size={size} className={cn("modal", className, {
      "modal--animated": animated
    })}>
      {children}
    </Card>
  );
}

Modal.Container = ModalContainer;
Modal.Header = ModalHeader;
Modal.Footer = ModalFooter;
Modal.Body = Card.Body;

Modal.propTypes = {
  animated: PropTypes.bool
};

Modal.defaultProps = {
  animated: true
};
