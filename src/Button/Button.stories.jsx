import React from "react";

import { Button } from "./Button";
import { ButtonRow } from "./ButtonRow";

import Vouch from "../icons/vouch.svg";
import Avatar from "../icons/avatar.svg";
import Filter from "../icons/filter.svg";
import Chevron from "../icons/chevron.svg";

export default {
  component: Button,
  title: "Components/Button",
};

const buttons = [
  { icon: Vouch, variant: "primary", label: "Vouch for new contact" },
  { icon: Vouch, variant: "secondary", label: "Vouch for new contact" },
  {
    iconPosition: "end",
    variant: "pill",
    label: "Vouch for new contact",
  },
  {
    label: "Red button",
    color: "red",
  },
  {
    label: "Green button",
    color: "green",
  },
];

const variants = [
  [
    { icon: Vouch, variant: "primary", label: "Vouch for new contact" },
    { icon: Avatar, variant: "primary", label: "Vouch for new contact" },
    { variant: "primary", label: "Loading", loading: true },
    {
      icon: Vouch,
      iconPosition: "end",
      label: "Vouch for new contact",
    },
  ],
  [
    { icon: Vouch, variant: "secondary", label: "Vouch for new contact" },
    { icon: Filter, variant: "secondary", label: "Show filters" },
    { variant: "secondary", label: "Loading", loading: true },
    {
      icon: Avatar,
      variant: "secondary",
      label: "Manage contact",
    },
  ],
  [
    { variant: "pill", label: "View all" },
    { variant: "pill", label: "View all", loading: true },
    {
      variant: "pill",
      label: "Voted",
      color: "red",
    },
    {
      variant: "pill",
      label: "Voted",
      color: "green",
    },
  ],
  [
    { variant: "secondary", color: "red", label: "Color Button" },
    { variant: "secondary", color: "green", label: "Color Button" },
    { variant: "secondary", color: "blue", label: "Color Button" },
  ],
  [
    { variant: "ethereum", label: "Ethereum Button" },
    { variant: "polygon", label: "Polygon Button" },
    { variant: "ethereum", loading: true, label: "Ethereum Button" },
    { variant: "polygon", loading: true, label: "Polygon Button" },
  ],
  [
    { variant: "lite", label: "Lite Button" },
    { variant: "lite", label: "Back to Overview" },
    {
      icon: Chevron,
      variant: "lite",
      label: "Back to Overview",
      loading: true,
    },
  ],
  [
    {
      packed: true,
      variant: "primary",
      label: "Packed button",
    },
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
        <Button {...props} disabled="true" />
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
