import React from "react";

import { Avatar } from "./Avatar";

import Metamask from "../icons/metamask.svg";
import WalletConnect from "../icons/walletconnect.svg";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

export const Default = () => (
  <>
    <Avatar mb="12px" />
    <Avatar size={48} mb="12px" variant="icon" src={Metamask} />
    <Avatar size={48} mb="12px" variant="icon" src={WalletConnect} />
  </>
);
