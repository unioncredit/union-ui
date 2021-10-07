import React from "react";

import { Grid, Row, Col } from "../Grid";

export default {
  component: Grid,
  title: "Components/Grid",
};

export const Default = () => (
  <Grid>
    <Row>
      <Col>Colum</Col>
      <Col>Colum</Col>
    </Row>
    <Row>
      <Col>Colum</Col>
      <Col>Colum</Col>
      <Col>Colum</Col>
      <Col>Colum</Col>
    </Row>
  </Grid>
);

export const WithDivider = () => (
  <Grid divider>
    <Row>
      <Col>Colum</Col>
      <Col>Colum</Col>
    </Row>
    <Row>
      <Col>Colum</Col>
      <Col>Colum</Col>
      <Col>Colum</Col>
      <Col>Colum</Col>
    </Row>
  </Grid>
);
