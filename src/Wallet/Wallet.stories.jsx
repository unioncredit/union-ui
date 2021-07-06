import React from "react";

import { Box } from "../Box";
import { Wallet } from "./Wallet";

export default {
  component: Wallet,
  title: "Components/Wallet",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <Wallet avatarSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
    </Box>
    <Box mb="20px">
      <Wallet
        indicator={2}
        indicatorWarning
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
      />
    </Box>
    <Box mb="20px">
      <Wallet
        ellipse
        indicator={2}
        avatarSrc="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
      />
    </Box>
  </>
);
