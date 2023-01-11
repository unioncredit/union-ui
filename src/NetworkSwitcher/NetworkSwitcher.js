import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { ContextMenu } from "../ContextMenu";
import WireCheck from "../icons/wireCheck.svg";

import "./network-switcher.scss";

export function NetworkButton({
  selected,
  onClick,
  imageSrc,
  children,
  label,
  type,
}) {
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
          <span>{children || label}</span>
          {selected && <WireCheck />}
        </>
      }
    />
  );
}

export function NetworkSwitcher({
  onChange,
  options,
  selected: selectedOption,
}) {
  const prevSelectedOption = useRef(selectedOption);
  const [selected, setSelected] = useState(selectedOption || options[0]);

  const handleClick = (option) => (toggleOpen) => {
    setSelected(option);
    toggleOpen();
    onChange && onChange(option, setSelected);
  };

  useEffect(() => {
    if (selectedOption.id != prevSelectedOption.current.id) {
      prevSelectedOption.current = selectedOption;
      setSelected(selectedOption);
    }
  }, [selectedOption]);

  return (
    <ContextMenu
      items={options.map((option) => ({
        ...option,
        onClick: handleClick(option),
        selected: option.id === selected.id,
      }))}
      button={(open) => (
        <div className="networkSwitcher__buttonContainer">
          <NetworkButton onClick={open} {...selected} />
        </div>
      )}
    />
  );
}
