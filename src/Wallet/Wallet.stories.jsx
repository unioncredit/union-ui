import React from "react";

import { Box } from "../Box";
import { Avatar } from "../Avatar";
import { Wallet } from "./Wallet";

export default {
  component: Wallet,
  title: "Components/Wallet",
};

export const Default = () => (
  <>
    <Box mb="20px">
      <Wallet
        name="liamo.eth"
        avatar={
          <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
        }
        networkSrc="https://polygonscan.com/images/svg/brands/polygon.svg"
      />
    </Box>
    <Box mb="20px">
      <Wallet name="liamo.eth" />
    </Box>
    <Box mb="20px">
      <Wallet name="liamo.eth" />
    </Box>
  </>
);
