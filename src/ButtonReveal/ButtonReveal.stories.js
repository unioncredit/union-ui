import { ButtonReveal } from "./ButtonReveal";
import { PlusIcon } from "../Icons";
import { Button } from "../Button";

export default {
  component: ButtonReveal,
  title: "components/ButtonReveal",
}

export const All = () => {
  return (
    <ButtonReveal
      w="400px"
      title="Contact alias"
      buttonProps={{
        w: "100%",
        icon: PlusIcon,
        size: "small",
        color: "secondary",
        variant: "light",
        label: "Add a contact alias",
      }}
    >
      <Button size="small" label="Press me" w="100%" />
    </ButtonReveal>
  )
}