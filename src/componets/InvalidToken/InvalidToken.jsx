import { Box, Text, Icon } from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons';

const InvalidToken = () => {
  return (
    <Box
      // d="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      // height="100vh"
      bg="red.50"
      p={4}
    >
      <Icon as={WarningIcon} boxSize="2em" color="red.500" mb={3} />
      <Text fontSize="xl" fontWeight="bold" color="red.500">
        Ups, token inválido o expirado
      </Text>
    </Box>
  );
};

export default InvalidToken;
