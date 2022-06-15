import React, { useState } from "react";

import { Box } from "../Box";
import { NetworkSwitcher, NetworkButton } from "./NetworkSwitcher";

import AbitrumAvatar from "../assets/arbitrum-avatar.png";
import EthereumAvatar from "../assets/ethereum-avatar.png";
import KovanAvatar from "../assets/kovan-avatar.png";

export default {
  component: NetworkSwitcher,
  title: "Components/NetworkSwitcher",
};

const options = [
  {
    label: "Ethereum",
    type: "ethereum",
    id: "ethereum",
    imageSrc: EthereumAvatar,
    as: NetworkButton,
  },
  {
    label: "Arbitrum",
    type: "arbitrum",
    id: "arbitrum",
    imageSrc: AbitrumAvatar,
    as: NetworkButton,
  },
  {
    label: "Kovan",
    type: "kovan",
    id: "kovan",
    imageSrc: KovanAvatar,
    as: NetworkButton,
  },
];

export const Default = () => (
  <>
    <NetworkSwitcher selected={options[0]} options={options} />
  </>
);

export const Controlled = () => {
  const [selected, setSelected] = useState(options[0]);

  const onClick = () => {
    setSelected(selected.id === options[1].id ? options[0] : options[1]);
  };

  return (
    <Box direction="vertical">
      <NetworkSwitcher selected={selected} options={options} />
      <button onClick={onClick}>Click</button>
      Label: {selected.label}
    </Box>
  );
};
