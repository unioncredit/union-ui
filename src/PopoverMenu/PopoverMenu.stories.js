import React from "react";

import { PopoverMenu } from "./PopoverMenu";
import { Box } from "../Box";
import { BlogIcon, DiscordIcon, DocsIcon, TermsIcon, TwitterIcon } from "../Icons";

export default {
  component: PopoverMenu,
  title: "Components/PopoverMenu",
};

export const Default = () => (
  <Box>
    <Box mb="240px">
      <PopoverMenu
        items={[
          { label: "Blog", icon: BlogIcon },
          { label: "Docs", icon: DocsIcon, },
          { label: "Twitter", icon: TwitterIcon },
          { label: "Discord", icon: DiscordIcon, },
          { label: "Terms & Conditions", icon: TermsIcon },
        ]}
        position="right"
      />
    </Box>
    <Box mb="240px" ml="240px">
      <PopoverMenu
        items={[
          { label: "Blog" },
          { label: "Docs" },
          { label: "Twitter" },
          { label: "Discord" },
          { label: "Terms & Conditions" },
        ]}
        position="right"
      />
    </Box>
  </Box>
);
