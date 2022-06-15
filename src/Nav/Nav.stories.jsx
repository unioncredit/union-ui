import React from "react";
import { NetworkSwitcher, NetworkButton } from "../NetworkSwitcher";
import { Box } from "../Box";

import { Nav } from "./Nav";
import { NavItem } from "./NavItem";
import { Wallet } from "../Wallet";
import { Avatar } from "../Avatar";

import AbitrumAvatar from "../assets/arbitrum-avatar.png";
import EthereumAvatar from "../assets/ethereum-avatar.png";
import KovanAvatar from "../assets/kovan-avatar.png";
import { ContextMenu } from "../ContextMenu";

export default {
  component: Nav,
  title: "Components/Nav",
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
  <div style={{ width: "920px" }}>
    <Nav>
      <Box fluid justify="space-between" align="center">
        <NetworkSwitcher selected={options[0]} options={options} />
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
        <Box>
          <Box mr="4px">
            <Wallet
              name="liamo.eth"
              avatar={
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
              }
            />
          </Box>
          <ContextMenu items={[]} position="left" />
        </Box>
      </Box>
    </Nav>
  </div>
);

export const Mobile = () => (
  <Nav mobile>
    <NavItem icon="union-token" label="124.5" bordered />
  </Nav>
);
