import { IconBadgeRow } from "./IconBadgeRow";
import { ArbitrumIcon, OptimismIcon, UnionLineIcon } from "../Icons";
import { IconBadge } from "../IconBadge";
import { Box } from "../Box";

export default {
  component: IconBadgeRow,
  title: "Components/IconBadgeRow",
};

export const Default = () => (
  <>
    <Box mb="16px">
      <IconBadgeRow>
        <IconBadge
          size="large"
          icon={UnionLineIcon}
          variant="filled"
          color="white"
          backgroundColor="#292524"
        />

        <IconBadge
          size="large"
          iconSize="large"
          icon={OptimismIcon}
          variant="filled"
          backgroundColor="white"
          borderColor="#E7E5E4"
        />
      </IconBadgeRow>
    </Box>

    <Box mb="16px">
      <IconBadgeRow>
        <IconBadge
          size="large"
          icon={UnionLineIcon}
          variant="filled"
          color="white"
          backgroundColor="#292524"
        />

        <IconBadge
          size="large"
          iconSize="large"
          icon={ArbitrumIcon}
          variant="filled"
          backgroundColor="white"
          borderColor="#E7E5E4"
        />
      </IconBadgeRow>
    </Box>
  </>
);

export const Reverse = () => (
  <>
    <Box mb="16px">
      <IconBadgeRow reverse>
        <IconBadge
          size="large"
          iconSize="large"
          icon={OptimismIcon}
          variant="filled"
          backgroundColor="white"
          borderColor="#E7E5E4"
        />

        <IconBadge
          size="large"
          icon={UnionLineIcon}
          variant="filled"
          color="white"
          backgroundColor="#292524"
        />
      </IconBadgeRow>
    </Box>

    <Box mb="16px">
      <IconBadgeRow reverse>
        <IconBadge
          size="large"
          iconSize="large"
          icon={ArbitrumIcon}
          variant="filled"
          backgroundColor="white"
          borderColor="#E7E5E4"
        />

        <IconBadge
          size="large"
          icon={UnionLineIcon}
          variant="filled"
          color="white"
          backgroundColor="#292524"
        />
      </IconBadgeRow>
    </Box>
  </>
)