import { Container, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = () => {
  const navigate = useNavigate();

  return (
    <Container
      minH="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
        <Heading
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
            lineHeight={"100%"}
            mb={10}
        >
            Cambiar contraseña
        </Heading>
        <ChangePasswordForm />
    </Container>
  );
};

export default ChangePassword;