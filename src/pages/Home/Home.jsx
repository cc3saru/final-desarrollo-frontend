import React, { useEffect } from "react";
import {
  Container,
  Heading,
  Stack,
  Image
} from "@chakra-ui/react";

const Home = () => {

  return (
    <Container
      maxW={"full"}
      bgColor={"white"}
      borderRadius="20px"
      boxShadow="2xl"
    >
      <Stack
        // textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          ¡Sorpresa!
        </Heading>
        <Stack spacing={6} direction={"row"}>
          <Image
            borderRadius="full"
            boxSize="300px"
            src="https://picsum.photos/200/300"
            alt="Lorem Picsum"
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Home;
