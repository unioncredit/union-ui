import React from "react";
import { NetworkSwitcher, NetworkButton } from "../NetworkSwitcher";
import { Box } from "../Box";

import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

import AbitrumAvatar from "../assets/arbitrum-avatar.png";
import EthereumAvatar from "../assets/ethereum-avatar.png";
import KovanAvatar from "../assets/kovan-avatar.png";
import { Button } from "../Button";

export default {
  component: Nav,
  title: "Components/Nav",
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
  <div style={{ width: "920px" }}>
    <Nav>
      <Box fluid justify="space-between" align="center">
        <NetworkSwitcher options={options} />
        <Box>
          <NavItem
            label="Get Started"
            icon="get-started"
            active
            description="Get vouched for to become a member and stake your DAI to collect UNION "
          />
          <NavItem label="Credit" icon="credit" />
          <NavItem label="Contacts" icon="contacts" />
        </Box>
        <Button label="Button" />
      </Box>
    </Nav>
  </div>
);

export const Mobile = () => (
  <Nav mobile>
    <NavItem icon="union-token" label="124.5" bordered />
  </Nav>
);
