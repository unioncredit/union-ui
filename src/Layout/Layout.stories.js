import React from "react";

import { Layout } from "./Layout";
import { Nav, NavItem } from "../Nav";
import { Button } from "../Button";
import { Box } from "../Box";

export default {
  component: Layout,
  title: "Components/Layout",
};

export const Default = () => (
  <Layout>
    <Layout.Main>
      <Layout.Header>
        <Nav>
          <NavItem
            label="Get Started"
            icon="credit"
            active
            description="Get vouched for to become a member and stake your DAI to collect UNION "
          />
          <NavItem label="Credit" icon="credit" disabled />
          <NavItem label="Contacts" icon="contacts" disabled />
          <NavItem label="Vote" icon="vote" disabled />
          <NavItem disabled label="Vote" icon="vote" disabled />
        </Nav>
        <Box>
          <Button variant="secondary" icon="vouch" label="0 UNION" />
        </Box>
      </Layout.Header>
      <div>
        <div style={{ width: "100px", height: "1100px", background: "grey" }} />
      </div>
    </Layout.Main>
  </Layout>
);
