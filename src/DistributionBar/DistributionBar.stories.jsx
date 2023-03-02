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
  </>
);

export const TwoTone = () => (
  <Box mb="20px">
    <DistributionBar
      items={[
        {
          value: 1000,
          color: "#93C5FD"
        },
        {
          value: 5000,
          color: "#1E3A8A",
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
          color: "#93C5FD"
        },
        {
          value: 2000,
          color: "#1E3A8A",
        },
        {
          value: 3000,
          color: "#F59E0B",
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
          color: "#93C5FD"
        },
        {
          value: 2000,
          color: "#1E3A8A",
        },
        {
          value: 3000,
          color: "#F59E0B",
        },
        {
          value: 1500,
          color: "#EF4444",
        }
      ]}
    />
  </Box>
);