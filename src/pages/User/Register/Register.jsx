import { Container, Heading } from "@chakra-ui/react";

import RegisterForm from "./RegisterForm";

const Register = () => {

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
                Registrate
        </Heading>
        <RegisterForm />
    </Container>
  );
};

export default Register;