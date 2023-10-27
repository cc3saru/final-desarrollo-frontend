import { useState, useEffect } from 'react';

import { useSearchParams } from "react-router-dom";

import { Form, Field } from 'react-final-form';

import { Button, Stack, ButtonGroup } from '@chakra-ui/react'
;
import { PasswordInput } from '../../../utils/Fields';

import { useNavigate } from 'react-router-dom';

import useUserStore from '../../../zustand/user';

import SimpleSpinner from '../../../componets/Loader/SimpleSpinner';

const passwordValidator = (value) => {
    if (!value) {
        return 'Este campo es requerido';
    }
    else if (value.length < 8) {
        return 'La contraseña debe tener al menos 8 caracteres';
    }
    else if (!value.match(/[a-z]/)) {
        return 'La contraseña debe tener al menos una letra minúscula';
    }
    else if (!value.match(/[A-Z]/)) {
        return 'La contraseña debe tener al menos una letra mayúscula';
    }
    else if (!value.match(/[0-9]/)) {
        return 'La contraseña debe tener al menos un número';
    }
};

const confirmPasswordValidator = (value, allValues) => {
    if (!value) {
        return 'Este campo es requerido';
    }
    else if (value !== allValues.new_password) {
        return 'Las contraseñas no coinciden';
    }
};

const passwordsMatch = (values) => {
  return values.new_password === values.confirm_password ? undefined : 'Las contraseñas no coinciden';
}

const ChangePasswordForm = () => {
    const changePassword = useUserStore((state) => state.changePassword);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();

    const [token, setToken] = useState(null);

    const [searchParams] = useSearchParams();

    const handleSubmit = ({ new_password }) => {
        changePassword(token, new_password, navigate, setLoading);
    };

    useEffect(() => {
        const token = searchParams.get("token");
        setToken(token);
    }, [searchParams]);

    return (
        <Form
            onSubmit={handleSubmit}
            validate={passwordsMatch}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <Field
                            name="new_password"
                            component={PasswordInput}
                            label="Nueva contraseña"
                            placeholder="Nueva contraseña"
                            validate={passwordValidator}
                        />
                        <Field
                            name="confirm_password"
                            component={PasswordInput}
                            label="Confirmar nueva contraseña"
                            placeholder="Confirmar nueva contraseña"
                            validate={confirmPasswordValidator}
                        />
                    </Stack>
                    {
                        loading ? (
                            <SimpleSpinner />
                        ) : (
                            <ButtonGroup spacing={4} mt={4}>
                                <Button
                                    mt={4}
                                    mb={4}
                                    colorScheme="teal"
                                    disabled={submitting}
                                    type="submit"
                                >
                                    Cambiar contraseña
                                </Button>
                                <Button
                                    mt={4}
                                    mb={4}
                                    onClick={() => navigate('/')}
                                    type="button"
                                >
                                    Cancelar
                                </Button>
                            </ButtonGroup>
                        )
                    }
                </form>
            )}
        />
    );
};

export default ChangePasswordForm;