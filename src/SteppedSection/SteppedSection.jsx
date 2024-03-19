import "./SteppedSection.scss";

import React from "react";
import cn from "classnames";

import { Box } from "../Box";
import CheckIcon from "../Icons/internal/Check.svg";
import { Button } from "../Button";

export function SteppedSections({ children }) {
  return (
    <Box direction="vertical" className="SteppedSections">
      {children}
    </Box>
  )
}

export function SteppedSection({ active, complete, children }) {
  return (
    <Box direction="vertical" className={cn("SteppedSection", {
      "active": active,
      "complete": complete,
    })}>
      {children}
    </Box>
  )
}

function SteppedSectionContainer({ className, children, ...props }) {
  return (
    <Box className={className} {...props}>
      {children}
    </Box>
  )
}

function SteppedSectionHeader({ onEditClick, className, children }) {
  return (
    <SteppedSectionContainer className={className}>
      <div className="SteppedSection__header__icon">
        <CheckIcon />
      </div>

      <Box fluid align="center" className="SteppedSection__header__body">
        {children}
      </Box>

      <Button
        label="Edit"
        variant="light"
        color="secondary"
        size="pill"
        className="SteppedSection__header__edit"
        onClick={onEditClick}
      />
    </SteppedSectionContainer>
  )
}

SteppedSection.CollapsedHeader = function ({ onEditClick, children }) {
  return (
    <SteppedSectionHeader
      children={children}
      onEditClick={onEditClick}
      className="SteppedSection__header SteppedSection__header--collapsed"
    />
  )
}

SteppedSection.Header = function ({ children }) {
  return (
    <SteppedSectionHeader children={children} className="SteppedSection__header" />
  )
}

SteppedSection.Body = function ({ children, ...props }) {
  return (
    <SteppedSectionContainer
      children={children}
      className="SteppedSection__body"
      {...props}
    />
  )
}
