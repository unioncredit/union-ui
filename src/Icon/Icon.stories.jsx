import React from "react";

import { Box } from "../Box";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Metamask } from "./Metamask";
import { WalletConnect } from "./WalletConnect";
import { Twitter, Telegram } from "./icons";
import { NavIcon } from "./NavIcon";

export default {
  component: Icon,
  title: "Components/Icon",
};

export const All = () => (
  <>
    <Box align="center" mb="20px">
      <Logo width="40px" />
    </Box>

    <Box align="center" mb="20px">
      <Metamask width="28px" />
      <WalletConnect width="40px" />
    </Box>

    <Box align="center" mb="20px">
      <Twitter width="28px" />
      <Telegram width="28px" />
    </Box>

    <Box align="center" mb="20px" className="storybook-icon-row">
      <Icon name="arrow-left" />
      <Icon name="borrow" />
      <Icon name="check" />
      <Icon name="manage" />
      <Icon name="no" />
      <Icon name="proposal" />
      <Icon name="repayment" />
      <Icon name="link" />
      <Icon name="vouch" />
      <Icon name="stats" />
      <Icon name="locked" />
    </Box>

    <Box align="center" mb="20px">
      <NavIcon name="get-started" />
      <NavIcon name="activity" />
      <NavIcon name="activity-new" />
      <NavIcon name="contacts" />
      <NavIcon name="credit" />
      <NavIcon name="vault" />
      <NavIcon name="vote" />
    </Box>
  </>
);
