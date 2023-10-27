import { Box, Text, Icon, Button } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box
      // d="flex"
      // flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      // height="100vh"
      bg="green.50"
      p={4}
    >
      <Icon as={CheckCircleIcon} boxSize="2em" color="green.500" mb={3} />
      <Text fontSize="xl" fontWeight="bold" color="green.500">
        ¡Verificación de correo electrónico exitosa!
      </Text>
      <Text fontSize="lg" color="gray.600" mt={3}>
        Ahora puedes acceder a todas las funciones de nuestro sitio.
      </Text>
      <Button
        mt={4}
        mb={4}
        colorScheme="blue"
        onClick={() => navigate('/')}
      >
        Ir al inicio
      </Button>
    </Box>
  );
};

export default EmailVerificationSuccess;
