import React from "react";

import { Box } from "../Box";

import "./layout.scss";

export function Layout({ children }) {
  return <Box className="layout">{children}</Box>;
}

export function Sidebar({ children }) {
  return <Box className="layout-sidebar">{children}</Box>;
}

export function Header({ children, ...props }) {
  return (
    <Box {...props} as="header" className="layout-header">
      {children}
    </Box>
  );
}

export function Main({ children, ...props }) {
  return (
    <Box className="layout-main-wrapper" fluid>
      <Box {...props} className="layout-main" direction="vertical">
        {children}
      </Box>
    </Box>
  );
}

Layout.Sidebar = Sidebar;
Layout.Header = Header;
Layout.Main = Main;
