import React from "react";

import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Label } from "../Label";
import { Badge } from "../Badge";
import { Bar } from "../Bar";

export default {
  component: Table,
  title: "Components/Table",
};

export const Default = () => (
  <Table>
    {Array(5)
      .fill(0)
      .map(() => (
        <TableRow>
          <TableCell>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
          </TableCell>
          <TableCell span={4}>
            <Text>Primary Label</Text>
            <Label as="p" size="small">
              Secondary Label
            </Label>
          </TableCell>
          <TableCell span={1}>
            <Label as="p" size="small">
              Small single label
            </Label>
          </TableCell>
          <TableCell span={1} align="center">
            <Bar size="small" percentage={60} label="62% No" secondaryBar />
          </TableCell>
          <TableCell span={1} align="center">
            <Badge color="red" label="Defaulted" />
          </TableCell>
          <TableCell span={1} align="right">
            <Button
              inline
              label="Manage trust"
              variant="pill"
              icon="chevron"
              iconPosition="end"
            />
          </TableCell>
        </TableRow>
      ))}
  </Table>
);
