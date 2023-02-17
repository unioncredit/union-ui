import { IconBadgeRow } from "./IconBadgeRow";
import { ArbitrumIcon, OptimismIcon, UnionSwirlWhiteIcon } from "../Icons";
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
          icon={UnionSwirlWhiteIcon}
          variant="filled"
          background="#292524"
        />

        <IconBadge
          size="large"
          iconSize="large"
          icon={OptimismIcon}
          variant="filled"
          background="white"
          borderColor="#E7E5E4"
        />
      </IconBadgeRow>
    </Box>

    <Box mb="16px">
      <IconBadgeRow>
        <IconBadge
          size="large"
          icon={UnionSwirlWhiteIcon}
          variant="filled"
          background="#292524"
        />

        <IconBadge
          size="large"
          iconSize="large"
          icon={ArbitrumIcon}
          variant="filled"
          background="white"
          borderColor="#E7E5E4"
        />
      </IconBadgeRow>
    </Box>
  </>
)