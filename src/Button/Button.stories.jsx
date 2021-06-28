import React from "react";

import { Button } from "./Button";
import { ButtonRow } from "../ButtonRow";

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
