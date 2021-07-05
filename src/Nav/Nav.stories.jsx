import React from "react";

import { Nav } from "./Nav";
import { NavItem } from "./NavItem";

export default {
  component: Nav,
  title: "Components/Nav",
};

export const Default = () => (
  <Nav>
    <NavItem
      label="Get Started"
      icon="credit"
      active
      description="Get vouched for to become a member and stake your DAI to collect UNION "
    />
    <NavItem label="Credit" icon="credit" />
    <NavItem label="Contacts" icon="contacts" />
    <NavItem label="Vote" icon="vote" />
  </Nav>
);
