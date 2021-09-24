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
import { Skeleton } from "../Skeleton";

export default {
  component: Table,
  title: "Components/Table",
};

export const Default = () => (
  <Table>
    {Array(5)
      .fill(0)
      .map((_, i) => (
        <TableRow
          onClick={() => alert("clicked")}
          active={i === 2 || i === 4}
          error={i === 4}
        >
          <TableCell>
            <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
          </TableCell>
          <TableCell span={4}>
            <Text>Primary Label</Text>
          </TableCell>
          <TableCell span={1}>
            <Label as="p" size="small">
              Small single label
            </Label>
          </TableCell>
          <TableCell span={1} align="center">
            <Bar size="small" percentage={60} label="62% No" secondaryBar />
          </TableCell>
          <TableCell span={1} align="right">
            {i === 2 ? (
              <Badge color="blue" label="Healthy" />
            ) : (
              <Badge color="red" label="Defaulted" />
            )}
          </TableCell>
        </TableRow>
      ))}
  </Table>
);

export const Skeletons = () => (
  <Table>
    {Array(5)
      .fill(0)
      .map(() => (
        <TableRow>
          <TableCell>
            <Avatar />
          </TableCell>
          <TableCell span={1}>
            <Skeleton size="large" variant="primary" />
            <Skeleton size="medium" variant="secondary" />
          </TableCell>
          <TableCell span={1}>
            <Skeleton size="medium" variant="secondary" />
          </TableCell>
          <TableCell span={1} align="center">
            <Skeleton size="small" variant="primary" />
          </TableCell>
          <TableCell span={1} align="center">
            <Skeleton size="small" variant="secondary" />
          </TableCell>
          <TableCell span={1} align="right">
            <Skeleton size="large" variant="primary" />
          </TableCell>
        </TableRow>
      ))}
  </Table>
);
