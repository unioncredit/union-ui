import React from "react";

import { Avatar } from "./Avatar";
import {
  ChartIcon,
  CheckIcon,
  CogIcon,
  CrossIcon,
  FilterIcon,
  WalletIcon,
} from "../Icons";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

const url = "https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg";

export const Default = () => (
  <>
    <Sizes />
  </>
);

const Sizes = () => {
  const sizes = ["x-small", "small", "medium", "large"];

  return sizes.map((size) => (
    <Avatar size={size} mb="12px" src={url} />
  ))
}

const Custom = () => {
  const sizes = [16, 24, 40, 64];

  return sizes.map((size) => (
    <Avatar size={size} mb="12px" src={url} />
  ))
}

const Icons = () => {
  const icons = [
    ChartIcon,
    CheckIcon,
    CogIcon,
    CrossIcon,
    FilterIcon,
    WalletIcon,
  ];

  return icons.map((icon) => (
    <Avatar size="small" icon={icon} mb="12px" />
  ))
}