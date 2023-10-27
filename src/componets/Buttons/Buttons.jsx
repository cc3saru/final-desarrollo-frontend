import { Button } from "@chakra-ui/react";
import React from "react";

const Buttons = ({ text, ...props }) => {
  return (
    <Button rounded={"full"} px={6} {...props}>
      {text}
    </Button>
  );
};

const ButtonPrimary = ({ text, onClick = () => {} }) => {
  return (
    <Buttons
      text={text}
      onClick={onClick}
      bg={"cyan.400"}
      _hover={{ bg: "cyan.500" }}
      colorScheme="orange"
    />
  );
};

const ButtonSecundary = ({ text, onClick = () => {} }) => {
  return <Buttons text={text} onClick={onClick} />;
};

export { ButtonPrimary, ButtonSecundary };
