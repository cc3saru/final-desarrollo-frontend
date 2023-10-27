import { Container, Heading } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";

const Login = () => {
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
          Descubre tu imagen del día
      </Heading>
      <LoginForm />
      <br />
      <button onClick={() => navigate("/register")}>
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Crear una cuenta
        </span>
      </button>
      <br />
      <button onClick={() => navigate("/forgot-password")}>
        <span
          style={{
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Olvidé mi contraseña
        </span>
      </button>
    </Container>
  );
};

export default Login;
