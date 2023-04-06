import { HiddenInput } from "./HiddenInput";
import { AddIcon } from "../Icons";
import { Input } from "../Input";

export default {
  component: HiddenInput,
  title: "components/HiddenInput",
}

export const All = () => {
  return (
    <HiddenInput
      w="400px"
      title="Contact alias"
      buttonProps={{
        w: "100%",
        icon: AddIcon,
        size: "regular",
        color: "secondary",
        variant: "light",
        label: "Add a contact alias",
      }}
    >
      <Input />
    </HiddenInput>
  )
}