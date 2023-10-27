import { Form, Field } from 'react-final-form';

import { Button, Stack } from '@chakra-ui/react';

import { TextInput, PasswordInput } from '../../../utils/Fields';
import SinpleSpinner from '../../../componets/Loader/SimpleSpinner';

import { useNavigate } from 'react-router-dom';

import useUserStore from "../../../zustand/user";

const required = value => (value ? undefined : "Este campo es requerido");

const LoginForm = () => {
    const login = useUserStore((state) => state.login);
    const loading = useUserStore((state) => state.loading);

    const navigate = useNavigate();

    const handleLogin = ({ email, password }) => {
        login(email, password, navigate);
    };

    return (
        <Form
            onSubmit={handleLogin}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Field
                            name="email"
                            component={TextInput}
                            label="Correo electrónico"
                            placeholder="Correo electrónico"
                            validate={required}
                        />
                        <Field
                            name="password"
                            component={PasswordInput}
                            placeholder="Contraseña"
                            label="Contraseña"
                            validate={required}
                        />
                    </Stack>
                    {
                        loading ? (
                            <SinpleSpinner />
                        ) : (
                            <Button
                                mt={4}
                                mb={4}
                                colorScheme="teal"
                                isLoading={submitting}
                                type="submit"
                            >
                                Iniciar sesión
                            </Button>
                        )
                    }
                </form>
            )}
        />
    );
};

export default LoginForm;


