import React, { useState } from "react";

import { Text } from "../Text";
import { Modal } from "../Modal";
import { SteppedSection, SteppedSections } from "./SteppedSection";
import { Box } from "../Box";
import { Button } from "../Button";
import { ButtonRow } from "../ButtonRow";
import { IconLabel } from "../IconLabel";

export default {
  component: SteppedSection,
  title: "Components/SteppedSection",
};

export const Default = () => {
  const [activePanel, setActivePanel] = useState(0);

  const body = (
    <SteppedSection.Body>
      <ButtonRow fluid>
        <Button fluid label="Previous step" onClick={() => setActivePanel(a => Math.max(0, a - 1))} />
        <Button fluid label="Next step" onClick={() => setActivePanel(a => Math.min(1, a + 1))} />
      </ButtonRow>
    </SteppedSection.Body>
  );

  return (
    <Modal>
      <Modal.Header
        title="New vouch"
        onClose={() => alert("modal close")}
      />
      <Modal.Body p={0}>
        <SteppedSections>
          <SteppedSection active={activePanel === 0} complete={true}>
            <SteppedSection.CollapsedHeader onEditClick={() => setActivePanel(0)}>
              <Box align="center">
                <Text m={0} grey={700} size="medium">
                  Vouching for
                </Text>

                <IconLabel ml="8px" src="https://pbs.twimg.com/profile_images/1576217831527616512/_iO9HGGE_400x400.jpg" label="bbque.eth" />
              </Box>
            </SteppedSection.CollapsedHeader>

            <SteppedSection.Header>
              <Box direction="vertical">
                <Text m={0} grey={800} size="medium">Who are you vouching for?</Text>
                <Text m={0} grey={600}>Enter the address or ENS for the entity you'd like to vouch for. It's important that you trust this entity with your money.</Text>
              </Box>
            </SteppedSection.Header>

            {body}
          </SteppedSection>

          <SteppedSection active={activePanel === 1}>
            <SteppedSection.CollapsedHeader>
              <Text m={0} grey={400} size="medium">How much do you trust them?</Text>
            </SteppedSection.CollapsedHeader>

            <SteppedSection.Header>
              <Box direction="vertical">
                <Text m={0} grey={800} size="medium">How much do you trust them?</Text>
                <Text m={0} grey={600}>Enter an amount of DAI to represent your trust towards them.</Text>
              </Box>
            </SteppedSection.Header>

            {body}
          </SteppedSection>
        </SteppedSections>
      </Modal.Body>
    </Modal>
  )
};