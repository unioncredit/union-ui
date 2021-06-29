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
  { icon: "vouch", variant: "rounded", label: "Vouch for new contact" },
  { icon: "vouch", variant: "floating", label: "Vouch for new contact" },
  {
    icon: "chevron",
    iconPosition: "end",
    variant: "pill",
    label: "Vouch for new contact",
  },
];

const variants = [
  [{ icon: "vouch", variant: "primary", label: "Vouch for new contact" }],
  [
    { icon: "vouch", variant: "secondary", label: "Vouch for new contact" },
    { icon: "arrow-left", variant: "secondary", label: "Back to Overview" },
    { variant: "secondary", label: "Cancel" },
  ],
  [
    { icon: "manage", variant: "rounded", label: "Manage contact" },
    { icon: "proposal", variant: "rounded", label: "Make proposal" },
    {
      icon: "proposal",
      variant: "rounded",
      label: "copy",
      background: "blue",
      color: "white",
    },
    {
      icon: "check",
      variant: "rounded",
      label: "for",
      background: "green",
      color: "white",
    },
  ],
  [
    { icon: "chevron", iconPosition: "end", variant: "pill", label: "Manage" },
    { variant: "pill", label: "View all" },
    {
      icon: "no",
      iconPosition: "end",
      variant: "pill",
      label: "Voted",
      color: "red",
    },
  ],
  [{ icon: "vouch", variant: "floating", label: "Vouch for someone" }],
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
