import { DistributionBar } from "./DistributionBar";
import { Box } from "../Box";

export default {
  component: DistributionBar,
  title: "Components/DistributionBar",
};

export const All = () => (
  <>
    <TwoTone />
    <TripleTone />
    <QuadTone />
    <EmptyValues />
  </>
);

export const TwoTone = () => (
  <Box mb="20px">
    <DistributionBar
      items={[
        {
          value: 1000,
          color: "blue200"
        },
        {
          value: 5000,
          color: "blue600",
        }
      ]}
    />
  </Box>
);

export const EmptyValues= () => (
  <Box mb="20px">
    <DistributionBar
      items={[
        {
          value: 0,
          color: "blue200"
        },
        {
          value: 2000,
          color: "blue600",
        },
        {
          value: 0,
          color: "amber500",
        }
      ]}
    />
  </Box>
);

export const TripleTone = () => (
  <Box mb="20px">
    <DistributionBar
      items={[
        {
          value: 2000,
          color: "blue200"
        },
        {
          value: 2000,
          color: "blue600",
        },
        {
          value: 3000,
          color: "amber500",
        }
      ]}
    />
  </Box>
);

export const QuadTone = () => (
  <Box mb="20px">
    <DistributionBar
      items={[
        {
          value: 2000,
          color: "blue200"
        },
        {
          value: 2000,
          color: "blue600",
        },
        {
          value: 3000,
          color: "amber500",
        },
        {
          value: 1500,
          color: "red600",
        }
      ]}
    />
  </Box>
);