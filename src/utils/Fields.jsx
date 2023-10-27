import { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

export const TextInput = ({ input, meta, label, ...props }) => {
  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <Input {...input} {...props} borderColor={meta.touched && meta.error ? 'red.500' : 'gray.300'} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export const PasswordInput = ({ input, meta, label, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={meta.touched && meta.error}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          {...input}
          {...props}
          type={show ? 'text' : 'password'}
          borderColor={meta.touched && meta.error ? 'red.500' : 'gray.300'}
          maxLength={8} // Agrega esta línea
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Ocultar' : 'Mostrar'}
          </Button>
        </InputRightElement>
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
