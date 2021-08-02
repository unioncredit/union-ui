import React from "react";

import { Box } from "../Box";

import "./layout.scss";

export function Layout({ children }) {
  return <Box className="layout">{children}</Box>;
}

export function Sidebar({ children }) {
  return <Box className="layout-sidebar">{children}</Box>;
}

export function Header({ children }) {
  return <header className="layout-header">{children}</header>;
}

export function Main({ children }) {
  return (
    <Box className="layout-main" direction="vertical">
      {children}
    </Box>
  );
}

Layout.Sidebar = Sidebar;
Layout.Header = Header;
Layout.Main = Main;
