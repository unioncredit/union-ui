import React from "react";

import { Layout } from "../Layout";
import { Nav, NavItem } from "../Nav";
import { Button, ButtonRow } from "../Button";
import { Box } from "../Box";
import { ToggleMenu } from "../ToggleMenu";
import { Grid } from "../Grid";
import { Card } from "../Card";
import { Stat } from "../Stats";
import { Dai } from "../Dai";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { Table, TableRow, TableCell } from "../Table";
import { Avatar } from "../Avatar";
import { Label } from "../Label";
import { Input } from "../Input";
import { Badge } from "../Badge";
import { Repayment, Borrow } from "../Icon";

export default {
  title: "Views/Contacts",
};

export const Default = () => (
  <Layout>
    <Layout.Main>
      <Layout.Header>
        <Nav>
          <NavItem
            label="Get Started"
            icon="credit"
            active
            description="Get vouched for to become a member and stake your DAI to collect UNION "
          />
          <NavItem label="Credit" icon="credit" disabled />
          <NavItem label="Contacts" icon="contacts" disabled />
          <NavItem label="Vote" icon="vote" disabled />
          <NavItem disabled label="Vote" icon="vote" disabled />
        </Nav>
        <Box>
          <Button variant="secondary" icon="vouch" label="0 UNION" />
        </Box>
      </Layout.Header>

      <Box fluid align="center" direction="vertical">
        <ToggleMenu items={[{ label: "You Trust" }, { label: "Trusts You" }]} />
        <Grid>
          <Grid.Row justify="center">
            <Grid.Col md={6}>
              <Card mt="24px">
                <Card.Header title="Contacts who trust you" />
                <Card.Body>
                  <Box mb="16px">
                    <Input placeholder="Filter by ENS or address" />
                  </Box>
                  <Table>
                    {Array(8)
                      .fill(0)
                      .map((_, i) => (
                        <TableRow
                          onClick={() => alert("clicked")}
                          active={i === 2}
                        >
                          <TableCell>
                            <Box align="center">
                              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
                              <Text ml="8px">gerhost.eth</Text>
                            </Box>
                          </TableCell>
                          <TableCell align="right">
                            <Text>
                              1,661 <Dai />
                            </Text>
                          </TableCell>
                        </TableRow>
                      ))}
                  </Table>
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col md={6}>
              <Card mt="24px">
                <Card.Body>
                  <Box align="center" mb="24px">
                    <Avatar size={56} />
                    <Box direction="vertical" fluid ml="12px">
                      <Heading m={0}>gerhost.eth</Heading>
                      <div>
                        <Badge label="0xd783" color="grey" mr="8px" />
                        <Badge label="Healthy" color="blue" />
                      </div>
                    </Box>
                    <Button
                      variant="secondary"
                      label="View Profile"
                      icon="external"
                      iconPosition="end"
                    />
                  </Box>

                  <Card>
                    <Card.Body>
                      <Box direction="vertical">
                        <Label m={0}>Trusted you since</Label>
                        <Text size="large" mb="24px">
                          8th November 2020
                        </Text>
                      </Box>
                      <Grid>
                        <Grid.Row>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              mb="12px"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                          <Grid.Col xs={4}>
                            <Stat
                              label="Total Stakes"
                              value={
                                <>
                                  3200
                                  <Dai />
                                </>
                              }
                            />
                          </Grid.Col>
                        </Grid.Row>
                      </Grid>
                      <Button label="Manage Contact" fluid mt="24px" />
                    </Card.Body>
                  </Card>
                  <Text size="large" mt="24px" grey={500}>
                    Account History
                  </Text>
                  <Table>
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <TableRow onClick={() => alert("clicked")}>
                          <TableCell>
                            <Box align="center">
                              {i % 2 === 0 ? <Borrow /> : <Repayment />}
                              <Text ml="8px">
                                {i % 2 === 0 ? "Borrowed" : "Repayment"}
                              </Text>
                            </Box>
                          </TableCell>
                          <TableCell>
                            <Label size="small">10:30am · 29 Oct</Label>
                          </TableCell>
                          <TableCell align="right">
                            <Text>
                              1,661 <Dai />
                            </Text>
                          </TableCell>
                        </TableRow>
                      ))}
                  </Table>
                </Card.Body>
              </Card>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </Box>
    </Layout.Main>
  </Layout>
);
