//Complete the custom Input component based on the props that it expects to receive
import { Input } from "@chakra-ui/react";
import "../App.css";

export const Some = ({
  type = "text",
  size = "md",
  variant = "solid",
  value,
  onChange,
}) => {
  return (
    <>
      <Input
        className="input"
        type={type}
        variant={variant}
        value={value}
        onChange={onChange}
        placeholder="Custom Input"
        size={size}
      />
    </>
  );
};
