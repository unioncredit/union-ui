import React from "react";
import cn from "classnames";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { ContextMenu } from "../ContextMenu";

import "./network-switcher.scss";
import { useState } from "react";

export function NetworkButton({ onClick, imageSrc, children, label, type }) {
  return (
    <Button
      variant="lite"
      onClick={onClick}
      className={cn("networkSwitcher", {
        [`networkSwitcher--${type}`]: type,
      })}
      label={
        <>
          <Avatar src={imageSrc} />
          {children || label}
        </>
      }
    />
  );
}

export function NetworkSwitcher({ onChange, options, defaultOption }) {
  const [selected, setSelected] = useState(defaultOption || options[0]);

  const handleClick = (option) => (toggleOpen) => {
    setSelected(option);
    toggleOpen();
    onChange && onChange(option);
  };

  return (
    <ContextMenu
      items={options.map((option) => ({
        ...option,
        onClick: handleClick(option),
      }))}
      button={(open) => (
        <div className="networkSwitcher__buttonContainer">
          <NetworkButton onClick={open} {...selected} />
        </div>
      )}
    />
  );
}
