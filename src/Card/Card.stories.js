import React from "react";

import { Card } from "./Card";
import { Container, Row, Col } from "../Grid";
import { Box } from "../Box";
import { Label } from "../Label";
import { ToggleMenu } from "../ToggleMenu";
import { Heading } from "../Heading";
import { Input, InputRow } from "../Input";
import { Button } from "../Button";

export default {
  component: Card,
  title: "Components/Card",
};

export const Default = () => (
  <Container>
    <Row>
      <Col xs={7}>
        <Card>
          <Card.Header title="Stake" />
          <Card.Body>
            <Box align="center" justify="space-between">
              <div>
                <Label as="p" size="small">
                  Currently Staked
                </Label>
                <Heading>3200 DAI</Heading>
                <Label as="p" size="small">
                  18.2 UNION per day
                </Label>
              </div>
              <ToggleMenu
                items={[{ label: "Deposit" }, { label: "Withdraw" }]}
              />
            </Box>
            <InputRow mt="20px">
              <Input
                label="Amout to deposit"
                caption="382.91 DAI Available"
                placeholder="0"
                suffix="DAI"
                cta={<Button label="Deposit" />}
              />
            </InputRow>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

//    <Box align="center" justify="space-between" mt="20px">
