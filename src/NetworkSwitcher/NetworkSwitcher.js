import cn from "classnames";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { ContextMenu } from "../ContextMenu";

import AbitrumAvatar from "../assets/arbitrum-avatar.png";
import EthereumAvatar from "../assets/ethereum-avatar.png";
import KovanAvatar from "../assets/kovan-avatar.png";

import "./network-switcher.scss";
import { useState } from "react";

const options = [
  {
    label: "Ethereum",
    type: "ethereum",
    imageSrc: EthereumAvatar,
    as: NetworkButton,
  },
  {
    label: "Arbitrum",
    type: "arbitrum",
    imageSrc: AbitrumAvatar,
    as: NetworkButton,
  },
  {
    label: "Kovan",
    type: "kovan",
    imageSrc: KovanAvatar,
    as: NetworkButton,
  },
];

function NetworkButton({ onClick, imageSrc, children, label, type }) {
  return (
    <Button
      variant="lite"
      onClick={onClick}
      className={cn("navNetworkSelect", {
        [`navNetworkSelect--${type}`]: type,
      })}
      label={
        <>
          <Avatar src={imageSrc} mr="4px" />
          {children || label}
        </>
      }
    />
  );
}

export function NetworkSwitcher({ onChange }) {
  const [selected, setSelected] = useState(options[0]);

  const handleClick = (option) => () => {
    setSelected(option);
    onChange && onChange(option);
  };

  return (
    <ContextMenu
      items={options.map((option) => ({
        ...option,
        onClick: handleClick(option),
      }))}
      button={(open) => <NetworkButton onClick={open} {...selected} />}
    />
  );
}

