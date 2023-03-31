import React from "react";

import { Modal } from "./Modal";
import { ModalOverlay } from "./ModalOverlay";

import { Select } from "../Select";
import { Box } from "../Box";
import { Text } from "../Text";
import { Heading } from "../Heading";
import { Button } from "../Button";
import { Divider } from "../Divider";

import Pending from "../Icons/icons/pending.svg";
import Success from "../Icons/icons/success.svg";
import Failed from "../Icons/icons/failed.svg";

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
  <Modal>
    <Modal.Header
      title="Borrow Funds"
      subTitle="Expand the web of trust with a vouch"
      onClose={() => alert("modal close")}
    />
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
    </Modal.Body>
  </Modal>
);

export const ModalWithOverlay = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal>
      <Modal.Header title="Borrow Funds" onClose={() => alert("modal close")} />
      <Modal.Body>
        <Text m={0}>Staked $1000</Text>
      </Modal.Body>
    </Modal>
  </ModalOverlay>
);

export const ModalWithContainers = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal>
      <Modal.Header title="Borrow Funds" onClose={() => alert("modal close")} />
      <Modal.Body>
        <Modal.Container>
          <Text m={0}>Staked $1000</Text>
        </Modal.Container>

        <Modal.Container mt="24px" p="12px">
          <Text m={0}>Staked $1000</Text>
        </Modal.Container>
      </Modal.Body>
    </Modal>
  </ModalOverlay>
);

export const ModalNoHeader = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal>
      <Modal.Body>
        <Text m={0}>Staked $1000</Text>
      </Modal.Body>
    </Modal>
  </ModalOverlay>
);

export const ModalWithBack = () => (
  <Modal>
    <Modal.Header
      title="Borrow Funds"
      onClose={() => alert("modal close")}
      onBack={() => alert("modal back")}
    />
    <Modal.Body>
      <Text m={0}>Staked $1000</Text>
    </Modal.Body>
  </Modal>
);
