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
import { Repayment, Borrow } from "../Icon";

export default {
  title: "Views/Borrow",
};

export const Default = () => (
  <Layout>
    <Layout.Main>
      <Layout.Header>
        <Nav>
          <NavItem label="Get Started" icon="credit" active />
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
        <ToggleMenu items={[{ label: "Borrow" }, { label: "Lend" }]} />
        <Grid>
          <Grid.Row justify="center">
            <Grid.Col md={6}>
              <Card mt="32px">
                <Card.Header title="Borrow & Repay" align="center" />
                <Card.Body>
                  <Grid>
                    <Grid.Row>
                      <Grid.Col>
                        <Stat
                          align="center"
                          label="Total Stakes"
                          size="large"
                          value={
                            <>
                              3200
                              <Dai />
                            </>
                          }
                          after="$100.00 frozen"
                        />
                        <Stat
                          mt="24px"
                          align="center"
                          label="Total Stakes"
                          value={
                            <>
                              3200
                              <Dai />
                            </>
                          }
                          after="$100.00 frozen"
                        />
                        <Button label="Borrow funds" mt="28px" />
                      </Grid.Col>
                      <Grid.Col>
                        <Stat
                          align="center"
                          label="Total Stakes"
                          size="large"
                          value={
                            <>
                              3200
                              <Dai />
                            </>
                          }
                          after="$100.00 frozen"
                        />
                        <Stat
                          mt="24px"
                          align="center"
                          label="Total Stakes"
                          value={
                            <>
                              3200
                              <Dai />
                            </>
                          }
                          after="$100.00 frozen"
                        />
                        <Button
                          label="Make a payment"
                          variant="secondary"
                          mt="28px"
                        />
                      </Grid.Col>
                    </Grid.Row>
                  </Grid>
                </Card.Body>
              </Card>
              <Card mt="24px">
                <Card.Header
                  title="Your Vouchers"
                  subTitle="Accounts providing you with credit"
                />
                <Card.Body>
                  <Table>
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <TableRow onClick={() => alert("clicked")}>
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

              <Card variant="blue" mt="24px">
                <Card.Body>
                  <Heading align="center">Get extra credit</Heading>
                  <Text align="center" mb="24px">
                    Share your link with other Union members who might be
                    willing to vouch for you with their DAI.
                  </Text>
                  <Text>https://union.finance/0xa44...3411</Text>
                  <Button label="Get QR Code" fluid />
                  <ButtonRow fluid mt="8px">
                    <Button
                      variant="secondary"
                      label="Share on Twitter"
                      fluid
                    />
                    <Button
                      variant="secondary"
                      label="Share on Telegram"
                      fluid
                    />
                  </ButtonRow>
                </Card.Body>
              </Card>

              <Card mt="24px">
                <Card.Header
                  title="Transaction History • 44"
                  subTitle="The history of your past borrowing activity"
                />
                <Card.Body>
                  <Table>
                    {" "}
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <TableRow
                          onClick={() => alert("clicked")}
                          active={i === 2}
                        >
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
