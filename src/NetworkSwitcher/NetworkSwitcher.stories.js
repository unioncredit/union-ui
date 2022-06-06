import React from "react";

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

export const Default = () => (
  <>
    <NetworkSwitcher options={options} />
  </>
);
