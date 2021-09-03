import React from "react";

import { Modal } from "./Modal";
import { Select } from "../Select";
import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { StatusIcon } from "../Icon";

import PolygonImg from "../assets/polygon.png";
import EthereumImg from "../assets/ethereum.png";

export default {
  component: Modal,
  title: "Components/Modal",
};

const options = [
  { value: "ethereum", label: "Ethereum", imageSrc: EthereumImg },
  { value: "ethereum-kovan", label: "Ethereum · Kovan", imageSrc: EthereumImg },
  { value: "polygon", label: "Polygon", imageSrc: PolygonImg },
  { value: "polygon-mumbai", label: "Polygon · Mumbai", imageSrc: PolygonImg },
];

export const Default = () => (
  <Modal title="Borrow Funds" onClose={() => alert("modal close")}>
    <Modal.Body>
      <Select options={options} />
      <Box align="center" justify="space-between" mt="20px">
        <Text m={0}>Metamask</Text>
        <Button variant="pill">Disconnect</Button>
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Heading m={0}>0xf007...1337</Heading>
      </Box>
      <Divider />
      <Box align="center" justify="space-between" mt="20px" mb="16px">
        <Text m={0} size="large">
          Transactions
        </Text>
        <Button variant="pill">Clear</Button>
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Text m={0}>Staked $500</Text>
        <StatusIcon variant="wire" name="pending" />
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Text m={0}>Borrowed $800</Text>
        <StatusIcon variant="wire" name="success" />
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Text m={0} color="orange">
          Wrote-off $240 debt
        </Text>
        <StatusIcon variant="wire" name="error" />
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Text m={0}>Staked $1000</Text>
        <StatusIcon variant="wire" name="success" />
      </Box>
    </Modal.Body>
  </Modal>
);

export const Drawer = () => (
  <Modal title="Borrow Funds" onClose={() => alert("modal close")} drawer>
    <Modal.Body>
      <Select options={options} />
      <Box align="center" justify="space-between" mt="20px">
        <Text m={0}>Metamask</Text>
        <Button variant="pill">Disconnect</Button>
      </Box>
      <Box align="center" justify="space-between" mt="10px">
        <Heading m={0}>0xf007...1337</Heading>
      </Box>
      <Divider />
      <Box align="center" justify="space-between" mt="20px" mb="16px">
        <Text m={0} size="large">
          Transactions
        </Text>
        <Button variant="pill">Clear</Button>
      </Box>
      {Array(8)
        .fill(0)
        .map(() => (
          <Box align="center" justify="space-between" mt="10px">
            <Text m={0}>Staked $500</Text>
            <StatusIcon variant="wire" name="pending" />
          </Box>
        ))}
    </Modal.Body>
    <Modal.Footer>
      <Button label="Click me" />
    </Modal.Footer>
  </Modal>
);
