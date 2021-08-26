import React from "react";

import { Card } from "./Card";
import { Grid, Row, Col } from "../Grid";
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
  <Grid>
    <Row>
      <Col xs={6}>
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
  </Grid>
);

export const Small = () => (
  <Card size="small">
    <Card.Header title="Stake" />
    <Card.Body>This is a small card</Card.Body>
    <Card.Footer>footer</Card.Footer>
  </Card>
);

export const Medium = () => (
  <Card size="medium">
    <Card.Header title="Stake" />
    <Card.Body>This is a small card</Card.Body>
    <Card.Footer>footer</Card.Footer>
  </Card>
);

export const Large = () => (
  <Card size="fluid" noGutter>
    <Grid bordered>
      <Row nogutter>
        <Col md={4}>
          <Heading>First Column</Heading>
        </Col>
        <Col md={8}>
          <Heading>First Column</Heading>
        </Col>
      </Row>
      <Row nogutter>
        <Col md={4}>
          <Heading>First Column</Heading>
        </Col>
        <Col md={8}>
          <Heading>First Column</Heading>
        </Col>
      </Row>
    </Grid>
  </Card>
);
