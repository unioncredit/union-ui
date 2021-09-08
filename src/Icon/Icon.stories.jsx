import React from "react";

import { Box } from "../Box";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { Metamask } from "./Metamask";
import { WalletConnect } from "./WalletConnect";
import { Twitter, Telegram } from "./icons";
import { NavIcon } from "./NavIcon";
import { Text } from "../Text";
import { Label } from "../Label";

export default {
  component: Icon,
  title: "Components/Icon",
};

export const All = () => (
  <>
    <Box mb="20px">
      <Box mr="20px">
        <Logo width="60px" />
      </Box>
      <Logo width="60px" withText />
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

export const External = () => (
  <>
    {Array(7)
      .fill(0)
      .map((_, i) => (
        <Text grey={(i + 1) * 100}>
          External link <Icon name="external" />
        </Text>
      ))}

    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => (
        <Text
          color={color}
          style={color === "white" && { backgroundColor: "black" }}
        >
          External link <Icon name="external" />
        </Text>
      )
    )}

    {Array(7)
      .fill(0)
      .map((_, i) => (
        <div>
          <Label grey={(i + 1) * 100}>
            External link <Icon name="external" />
          </Label>
        </div>
      ))}

    {["blue", "green", "white", "red", "grey", "black", "orange"].map(
      (color) => (
        <div>
          <Label
            color={color}
            style={color === "white" && { backgroundColor: "black" }}
          >
            External link <Icon name="external" />
          </Label>
        </div>
      )
    )}

    <div>
      <Label size="small">
        External link <Icon name="external" />
      </Label>
    </div>
  </>
);
