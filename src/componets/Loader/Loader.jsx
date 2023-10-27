import { Box, Spinner, Text } from '@chakra-ui/react';

const Loader = () => {
    return (
        <Box
            w="100%"
            h="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
        <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
        />
            <Text fontSize="xl" fontWeight="bold" mt={5}>
                Cargando...
            </Text>
        </Box>
    );
};

export default Loader;