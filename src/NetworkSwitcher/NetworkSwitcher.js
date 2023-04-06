import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { PopoverMenu } from "../PopoverMenu";

import "./NetworkSwitcher.scss";
import { CheckIcon } from "../Icons";

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
      onClick={onClick}
      className={cn("networkSwitcher", {
        [`networkSwitcher--${type}`]: type,
        "selected": selected,
      })}
      label={
        <>
          <Avatar src={imageSrc} />
          <span>{children || label}</span>
          {selected && <CheckIcon />}
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
    onChange && onChange(option);
  };

  useEffect(() => {
    if (selectedOption.id !== prevSelectedOption.current.id) {
      prevSelectedOption.current = selectedOption;
      setSelected(selectedOption);
    }
  }, [selectedOption]);

  return (
    <PopoverMenu
      className="networkSwitcher__menu"
      items={options.map((option) => ({
        ...option,
        key: option.chainId,
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
