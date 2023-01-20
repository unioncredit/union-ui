import React from "react";

import { Table } from "./Table";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableHead } from "./TableHead";
import { Avatar } from "../Avatar";
import { Text } from "../Text";
import { Badge } from "../Badge";
import { Bar } from "../Bar";
import { Skeleton } from "../Skeleton";
import { Card } from "../Card";
import { Pagination } from "../Pagination";

export default {
  component: Table,
  title: "Components/Table",
};

export const Default = () => (
  <>
    <Table>
      <TableRow>
        <TableHead></TableHead>
        <TableHead>Primary</TableHead>
        <TableHead>Foo</TableHead>
        <TableHead>Bar</TableHead>
        <TableHead>Badge</TableHead>
      </TableRow>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <TableRow
            onClick={() => alert("clicked")}
            active={i === 2 || i === 4}
            error={i === 4 || i === 1}
          >
            <TableCell fixedSize>
              <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
            </TableCell>
            <TableCell>
              <Text>Primary Label</Text>
            </TableCell>
            <TableCell>
              <Text size="small">
                Small single label
              </Text>
            </TableCell>
            <TableCell align="center">
              <Bar size="small" percentage={60} label="62% No" secondaryBar />
            </TableCell>
            <TableCell align="right">
              {i === 2 ? (
                <Badge color="blue" label="Healthy" />
              ) : (
                <Badge color="red" label="Defaulted" />
              )}
            </TableCell>
          </TableRow>
        ))}
    </Table>
    <Pagination pages={4} activePage={4} mb="30px" onClick={() => {}} />
  </>
);

export const TableCard = () => {
  return (
    <Card>
      <Card.Body>Test</Card.Body>
      <Table>
        <TableRow>
          <TableHead></TableHead>
          <TableHead>Primary</TableHead>
          <TableHead align="right">Badge</TableHead>
        </TableRow>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <TableRow
              onClick={() => alert("clicked")}
              active={i === 2 || i === 4}
              error={i === 4 || i === 1}
            >
              <TableCell fixedSize>
                <Avatar src="https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg" />
              </TableCell>
              <TableCell>
                <Text>Primary Label</Text>
              </TableCell>
              <TableCell align="right">
                {i === 2 ? (
                  <Badge color="blue" label="Healthy" />
                ) : (
                  <Badge color="red" label="Defaulted" />
                )}
              </TableCell>
            </TableRow>
          ))}
      </Table>
      <Card.Body>Test</Card.Body>
    </Card>
  );
};

export const Skeletons = () => (
  <Table>
    {Array(5)
      .fill(0)
      .map(() => (
        <TableRow>
          <TableCell>
            <Skeleton shimmer variant="circle" size={24} grey={200} />
          </TableCell>
          <TableCell span={1}>
            <Skeleton shimmer width={100} height={10} grey={200} />
            <Skeleton shimmer width={60} height={10} grey={200} mt="4px" />
          </TableCell>
          <TableCell span={1}>
            <Skeleton width={100} height={10} grey={200} />
          </TableCell>
          <TableCell span={1} align="center">
            <Skeleton width={100} height={10} grey={200} />
          </TableCell>
          <TableCell span={1} align="center">
            <Skeleton width={100} height={10} grey={200} />
          </TableCell>
          <TableCell span={1} align="right">
            <Skeleton width={100} height={10} grey={200} />
          </TableCell>
        </TableRow>
      ))}
  </Table>
);
