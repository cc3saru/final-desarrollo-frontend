import { Container, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = () => {
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
            Recuperar contraseña
        </Heading>
        <ForgotPasswordForm />
    </Container>
  );
};

export default ForgotPassword;