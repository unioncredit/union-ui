import React from "react";
import cn from "classnames";

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

export function Main({ children, verticalAlign = false }) {
  return (
    <Box
      className={cn("layout-main", {
        [`layout-main--verticalAlign`]: verticalAlign,
      })}
      direction="vertical"
    >
      {children}
    </Box>
  );
}

Layout.Sidebar = Sidebar;
Layout.Header = Header;
Layout.Main = Main;
