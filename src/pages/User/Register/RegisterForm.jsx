import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Stack, ButtonGroup } from '@chakra-ui/react';
import { TextInput, PasswordInput } from '../../../utils/Fields';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../zustand/user';
import ModalComponent from '../../../componets/Modal/Modal';
import SinpleSpinner from '../../../componets/Loader/SimpleSpinner';

const required = (value) => (value ? undefined : 'Este campo es requerido');

const isValidEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    return emailRegex.test(value);
};

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
    else if (value !== allValues.password) {
        return 'Las contraseñas no coinciden';
    }
};

const passwordsMatch = (values) => {
  values.password === values.confirm_password ? undefined : 'Las contraseñas no coinciden';
}

const validateEmail = (value) => {
    if (!value) {
        return 'Este campo es requerido';
    }
    else if (!isValidEmail(value)) {
        return 'El correo electrónico no es válido';
    }
};

const RegisterForm = () => {
    const register = useUserStore((state) => state.register);
    const loading = useUserStore((state) => state.loading);
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
        navigate('/');
    };

    const handleSubmit = ({first_name, last_name, email, password}) => {
        register(first_name, last_name, email, password, setOpenModal);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={passwordsMatch}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <ModalComponent
                        isOpen={openModal}
                        onClose={closeModal}
                        modalTitle={"Registro exitoso"}
                    >
                        <p>
                            Se ha enviado un correo electrónico de confirmación a la dirección que proporcionaste. Por favor, 
                            revisa tu bandeja de entrada y sigue las instrucciones para activar tu cuenta.
                        </p>
                    </ModalComponent>
                    <Stack spacing={4}>
                        <Field
                        name="first_name"
                        component={TextInput}
                        label="Nombre"
                        placeholder="Nombre"
                        validate={required}
                        />
                        <Field
                        name="last_name"
                        component={TextInput}
                        label="Apellido"
                        placeholder="Apellido"
                        validate={required}
                        />
                        <Field
                        name="email"
                        component={TextInput}
                        label="Correo electrónico"
                        placeholder="Correo electrónico"
                        validate={validateEmail}
                        />
                        <Field
                        name="password"
                        component={PasswordInput}
                        label="Contraseña"
                        placeholder="Contraseña"
                        validate={passwordValidator}
                        />
                        <Field
                        name="confirm_password"
                        component={PasswordInput}
                        label="Confirmar Contraseña"
                        placeholder="Confirmar Contraseña"
                        validate={confirmPasswordValidator}
                        />
                    </Stack>
                    {
                        loading ? (
                            <SinpleSpinner />
                        ) : (
                            <ButtonGroup spacing={4} mt={4}>
                                <Button
                                    mt={4}
                                    mb={4}
                                    colorScheme="teal"
                                    disabled={submitting}
                                    type="submit"
                                >
                                    Registrarse
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

export default RegisterForm;
