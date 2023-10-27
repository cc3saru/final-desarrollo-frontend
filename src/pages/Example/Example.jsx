import React, { useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ButtonPrimary,
  ButtonSecundary,
} from "../../componets/Buttons/Buttons";
import ModalComponent from "../../componets/Modal/Modal";
import { toast } from "react-hot-toast";
import TableComponent from "../../componets/Tables/Tables";

// toast
const notifySucces = () => toast.success("Here is your toast.");
const notifyError = () => toast.error("Here is your toast.");

// axios

// table
const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Last Name",
    accessor: "lastName",
  },
  {
    Header: "Age",
    accessor: "age",
  },
];

const data = [
  {
    name: "Juan",
    lastName: "Perez",
    age: 20,
  },
  {
    name: "Pedro",
    lastName: "Perez",
    age: 20,
  },
  {
    name: "Maria",
    lastName: "Perez",
    age: 20,
  },
  {
    name: "Jose",
    lastName: "Perez",
    age: 20,
  },
];


const Example = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      maxW={"full"}
      bgColor={"white"}
      borderRadius="20px"
      boxShadow="2xl"
    >
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Titulo prueba
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Contendio
        </Text>
        <Stack spacing={6} direction={"row"}>
          <ButtonPrimary text={"Button 1"} />
          <ButtonSecundary text="Button 2" />
        </Stack>
        <Flex
          w={"full"}
          align={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Text fontWeight={600} fontSize={{ base: "2xl" }} lineHeight={"110%"}>
            SUBTITEL
          </Text>

          <Text
            fontWeight={600}
            fontSize={{ base: "2xl" }}
            lineHeight={"110%"}
            mt={"10px"}
          >
            Modal
          </Text>

          {/* modal */}
          <ModalComponent
            isOpen={isOpen}
            onClose={onClose}
            modalTitle={"Example modal"}
          >
            <h1>Contenido del modal</h1>
          </ModalComponent>
          <ButtonPrimary text={"Open Modal"} onClick={onOpen} />

          <ButtonSecundary onClick={notifySucces} text={"Succes"} />
          <ButtonSecundary onClick={notifyError} text={"Error"} />
        </Flex>

        <Text fontWeight={600} fontSize={{ base: "2xl" }} lineHeight={"110%"}>
          TABLE
        </Text>
        <TableComponent columns={columns} data={data} />
      </Stack>
    </Container>
  );
};

export default Example;
