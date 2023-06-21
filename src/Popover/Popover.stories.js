import React from "react";

import { Popover } from "./Popover";
import { Button } from "../Button";
import { Box } from "../Box";
import { Modal } from "../Modal";

export default {
  component: Popover,
  title: "Components/Popover",
};

export const Default = () => (
  <div style={{ marginLeft: "200px" }}>
    <Box mb="240px">
      <Popover position="left">
        <Modal>
          <Modal.Body>
            <p>Popover content</p>
          </Modal.Body>
        </Modal>
      </Popover>

    </Box>
    <Box mb="240px">
      <Popover
        button={(toggleOpen) => (
          <Button
            onClick={toggleOpen}
            variant="secondary"
            label="Menu"
            icon="dropdown-arrow"
            iconPosition="end"
          />
        )}
        position="right"
      >
        <p>Popover content!</p>
      </Popover>
    </Box>
  </div>
);
