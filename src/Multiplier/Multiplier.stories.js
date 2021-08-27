import React from "react";

import { Multiplier } from "./Multiplier";
import { Text } from "../Text";
import { Label } from "../Label";
import { Card } from "../Card";
import { Button } from "../Button";
import { Heading } from "../Heading";
import { NavIcon } from "../Icon";
import { Box } from "../Box";

export default {
  component: Multiplier,
  title: "Components/Multiplier",
};

export const Default = () => (
  <>
    <Multiplier multiplier={1.75} />
    <Multiplier multiplier={1.5} />
    <Multiplier multiplier={1.25} />
    <Multiplier multiplier={1} />
    <Multiplier multiplier={0.75} />
    <Multiplier multiplier={0} />
  </>
);

export const RewardsCard = () => (
  <Card size="small">
    <Card.Body>
      <Box align="center" mb="16px">
        <NavIcon name="union-token" />
        <Text grey={700} m={0} ml="6px">
          Rewards
        </Text>
      </Box>
      <Heading mb={0}>2.23k</Heading>
      <Text mb="12px">
        <Label grey={600}>14.48k in wallet</Label>
      </Text>
      <Text mb={0}>
        <Label grey={600}>Earning multiplier</Label>
      </Text>
      <Multiplier multiplier={1.5} />
      <Button label="Claim all rewards" fluid mt="18px" />
    </Card.Body>
  </Card>
);
