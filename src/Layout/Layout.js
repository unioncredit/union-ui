import React from "react";

import { Box } from "../Box";

import "./Layout.scss";

export function Layout({ children }) {
  return <Box className="Layout">{children}</Box>;
}

export function Header({ children, ...props }) {
  return (
    <Box {...props} as="header" className="Layout__header">
      {children}
    </Box>
  );
}

export function Main({ children, ...props }) {
  return (
    <Box className="Layout__wrapper" fluid>
      <Box {...props} className="Layout__main" direction="vertical">
        {children}
      </Box>
    </Box>
  );
}

export function Columned({ children, ...props }) {
  return (
    <Box {...props} className="Layout__columned" direction="vertical">
      {children}
    </Box>
  )
}

Layout.Header = Header;
Layout.Main = Main;
Layout.Columned = Columned;