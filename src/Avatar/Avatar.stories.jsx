import React from "react";

import { Avatar } from "./Avatar";

import { ReactComponent as Metamask } from "../icons/metamask.svg";
import { ReactComponent as WalletConnect } from "../icons/walletconnect.svg";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

export const Default = () => (
  <>
    <Avatar mb="12px" />
    <Avatar size={48} mb="12px" variant="icon" icon={Metamask} />
    <Avatar size={48} mb="12px" variant="icon" icon={WalletConnect} />
  </>
);
