import React from "react";

import { Layout } from "./Layout";
import { Nav, NavItem } from "../Nav";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Wallet } from "../Wallet";
import { Box } from "../Box";

export default {
  component: Layout,
  title: "Components/Layout",
};

export const Default = () => (
  <Layout>
    <Layout.Sidebar>
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
        <NavItem disabled label="Vote" icon="vote" />
      </Nav>
    </Layout.Sidebar>
    <Layout.Main>
      <Layout.Header>
        <Heading>Get Started</Heading>
        <Box>
          <Button variant="secondary" icon="vouch">
            0 UNION
          </Button>
          <Wallet />
        </Box>
      </Layout.Header>
      Main
    </Layout.Main>
  </Layout>
);
