import React from "react";

import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";

export default {
  component: Button,
  title: "Components/Button",
};

const buttons = [
  { icon: "vouch", variant: "primary", label: "Vouch for new contact" },
  { icon: "vouch", variant: "secondary", label: "Vouch for new contact" },
  {
    icon: "chevron",
    iconPosition: "end",
    variant: "pill",
    label: "Vouch for new contact",
  },
];

const variants = [
  [
    { icon: "vouch", variant: "primary", label: "Vouch for new contact" },
    { icon: "link", variant: "primary", label: "Vouch for new contact" },
    { variant: "primary", label: "Loading", loading: true },
  ],
  [
    { icon: "vouch", variant: "secondary", label: "Vouch for new contact" },
    { icon: "arrow-left", variant: "secondary", label: "Back to Overview" },
    { variant: "secondary", label: "Cancel" },
    { variant: "secondary", label: "Loading", loading: true },
  ],
  [
    {
      icon: "manage",
      variant: "secondary",
      label: "Manage contact",
    },
    {
      icon: "proposal",
      variant: "secondary",
      label: "Make proposal",
    },
    {
      icon: "proposal",
      variant: "primary",
      label: "copy",
    },
  ],
  [
    { icon: "chevron", iconPosition: "end", variant: "pill", label: "Manage" },
    { variant: "pill", label: "View all" },
    { variant: "pill", label: "View all", loading: true },
    {
      icon: "no",
      iconPosition: "end",
      variant: "pill",
      label: "Voted",
      color: "red",
    },
    {
      icon: "check",
      iconPosition: "end",
      variant: "pill",
      label: "Voted",
      color: "green",
    },
  ],
  [
    { icon: "metamask", variant: "secondary", label: "Metamask" },
    { icon: "walletconnect", variant: "secondary", label: "WalletConnect" },
  ],
  [
    { icon: "twitter", label: "twitter", rounded: true, color: "white" },
    { icon: "telegram", label: "telegram", rounded: true, color: "white" },
  ],
  [
    { icon: "twitter", variant: "secondary", rounded: true },
    { icon: "telegram", variant: "secondary", rounded: true },
  ],
  [
    { variant: "secondary", color: "red", label: "Color Button" },
    { variant: "secondary", color: "green", label: "Color Button" },
    { variant: "secondary", color: "blue", label: "Color Button" },
  ],
  [
    { variant: "ethereum", label: "Ethereum Button" },
    { variant: "polygon", label: "Polygon Button" },
  ],
];

export const Primary = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button {...props} />
      </ButtonRow>
    ))}
  </>
);

export const Disabled = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button {...props} disabled />
      </ButtonRow>
    ))}
  </>
);

export const Variants = () => (
  <>
    {variants.map((buttons) => (
      <ButtonRow mb="20px">
        {buttons.map((props) => (
          <Button {...props} />
        ))}
      </ButtonRow>
    ))}
  </>
);

export const Links = () => (
  <>
    {buttons.map((props) => (
      <ButtonRow mb="20px">
        <Button as="a" {...props} href="http://union.finance" target="_blank" />
      </ButtonRow>
    ))}
  </>
);
