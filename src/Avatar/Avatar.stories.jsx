import React from "react";

import { Avatar } from "./Avatar";
import { Metamask } from "../Icon/Metamask";
import { WalletConnect } from "../Icon/WalletConnect";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

export const Default = () => (
  <>
    <Avatar mb="12px" />
    <Avatar size={48} mb="12px" src={Metamask} />
    <Avatar size={48} mb="12px" src={WalletConnect} />
  </>
);
