import React from "react";

import { Modal } from "./Modal";
import { ModalOverlay } from "./ModalOverlay";
import { Text } from "../Text";

export default {
  component: Modal,
  title: "Components/Modal",
};

export const Default = () => (
  <Modal>
    <Modal.Header
      title="Borrow Funds"
      onClose={() => alert("modal close")}
    />
    <Modal.Body>
      <Text m={0} size="medium">Modal body here</Text>
    </Modal.Body>
  </Modal>
);

export const ModalWithSubtitle = () => (
  <Modal>
    <Modal.Header
      title="Borrow Funds"
      subTitle="Expand the web of trust with a vouch"
      onClose={() => alert("modal close")}
    />
    <Modal.Body>
      <Text m={0} size="medium">Modal body here</Text>
    </Modal.Body>
  </Modal>
);

export const ModalWithOverlay = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal>
      <Modal.Header
        title="Borrow Funds"
        onClose={() => alert("modal close")}
      />
      <Modal.Body>
        <Text m={0} size="medium">Modal body here</Text>
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
          <Text m={0} size="medium">Modal container</Text>
        </Modal.Container>

        <Modal.Container mt="24px" p="12px">
          <Text m={0} size="medium">Compact modal container</Text>
        </Modal.Container>
      </Modal.Body>
    </Modal>
  </ModalOverlay>
);

export const ModalNoHeader = () => (
  <ModalOverlay onClick={() => alert("close")}>
    <Modal>
      <Modal.Body>
        <Text m={0} size="medium">Modal body here</Text>
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
      <Text m={0} size="medium">Modal body here</Text>
    </Modal.Body>
  </Modal>
);
