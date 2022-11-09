//Complete the custom Input component based on the props that it expects to receive
import { Button } from "@chakra-ui/button";
import "../App.css";

export const Some = ({
  colorScheme = "white",
  size = "md",
  variant = "solid",
}) => {
  return (
    // <Stack spacing={10} direction="row" align="center">
    <Button
      className="bot"
      colorScheme={colorScheme}
      size={size}
      variant={variant}
    >
      Custom Button
    </Button>
    // </Stack>
  );
};
// export const Button = () => {
//   return <button>Button</button>;
// };
