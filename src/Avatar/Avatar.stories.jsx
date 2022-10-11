import React from "react";

import { Avatar } from "./Avatar";

export default {
  component: Avatar,
  title: "Components/Avatar",
};

export const Default = () => (
  <>
    <Avatar mb="12px" />
    <Avatar size={48} mb="12px" variant="icon" icon={null} />
    <Avatar size={48} mb="12px" variant="icon" icon={null} />
  </>
);
