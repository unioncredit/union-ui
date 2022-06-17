import React from "react";

import { Modal } from "./Modal";
import { ModalOverlay } from "./ModalOverlay";

import { Select } from "../Select";
import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Divider } from "../Divider";

import Pending from "../icons/pending.svg";
import Success from "../icons/success.svg";
import Failed from "../icons/failed.svg";

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
      <Success width="16px" />
    </Box>
    <Box align="center" justify="space-between" mt="10px">
      <Text m={0}>Borrowed $800</Text>
      <Failed width="16px" />
    </Box>
    <Box align="center" justify="space-between" mt="10px">
      <Text m={0} color="orange">
        Wrote-off $240 debt
      </Text>
      <Failed width="16px" />
    </Box>
    <Box align="center" justify="space-between" mt="10px">
      <Text m={0}>Staked $1000</Text>
      <Pending width="16px" />
    </Box>
  </Modal>
);

export const ModalWithOverlay = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal title="Borrow Funds" onClose={() => alert("modal close")}>
      <Text m={0}>Staked $1000</Text>
    </Modal>
  </ModalOverlay>
);

export const ModalWithBack = () => (
  <Modal
    title="Borrow Funds"
    onClose={() => alert("modal close")}
    onBack={() => alert("modal back")}
  >
    <Text m={0}>Staked $1000</Text>
  </Modal>
);

export const ModalWithFooter = () => (
  <Modal
    title="Borrow Funds"
    onClose={() => alert("modal close")}
    onBack={() => alert("modal back")}
    footer={
      <Box align="center" justify="space-between">
        <Text m={0}>Metamask</Text>
        <Button variant="pill">Disconnect</Button>
      </Box>
    }
  >
    <Text m={0}>Staked $1000</Text>
  </Modal>
);
