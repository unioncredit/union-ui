import { Box } from "../Box";
import {
  ChartIcon,
  CheckIcon,
  CogIcon,
  CrossIcon,
  FilterIcon,
  WalletIcon,
} from "../Icons";
import { IconBadge } from "./IconBadge";

export default {
  component: IconBadge,
  title: "components/IconBadge",
};

const icons = [
  ChartIcon,
  CheckIcon,
  CogIcon,
  CrossIcon,
  FilterIcon,
  WalletIcon,
];

const sizes = [
  "small",
  "regular",
  "large",
];

export const All = () => {
  const variants = [
    { variant: "filled" },
    { variant: "outlined", color: "black" },
  ];

  return (
    <>
      {icons.map((Icon) => (
        <Box mb="10px" align="center">
          {variants.map((props) => (
            <>
              {sizes.map((size) => (
                <IconBadge icon={Icon} size={size} mr="5px" {...props} />
              ))}
            </>
          ))}
        </Box>
      ))}
    </>
  )
};

export const Filled = () => (
  <>
    {icons.map((Icon) => (
      <Box mb="10px" align="center">
        {sizes.map((size) => (
          <IconBadge icon={Icon} size={size} variant="filled" mr="5px" />
        ))}
      </Box>
    ))}
  </>
);

export const Outlined = () => (
  <>
    {icons.map((Icon) => (
      <Box mb="10px" align="center">
        {sizes.map((size) => (
          <IconBadge icon={Icon} size={size} variant="outlined" color="black" mr="5px" />
        ))}
      </Box>
    ))}
  </>
);

export const Colors = () => {
  const variants = [
    { variant: "filled", color: "black" },
    { variant: "filled", background: "black" },
    { variant: "outlined" },
  ];
  const colors = [
    "violet",
    "indigo",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  return (
    <>
      {variants.map((props) => (
        <Box mb="10px" align="center">
          {colors.map((color) => (
            <IconBadge size="large" icon={ChartIcon} color={color} background={color} mr="5px" {...props} />
          ))}
        </Box>
      ))}
    </>
  )
};