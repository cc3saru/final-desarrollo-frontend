import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Button, Stack, ButtonGroup } from '@chakra-ui/react';
import { TextInput } from '../../../utils/Fields';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../../zustand/user';
import ModalComponent from '../../../componets/Modal/Modal';
import SinpleSpinner from '../../../componets/Loader/SimpleSpinner';

const isValidEmail = (value) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(value);
};

const validateEmail = (value) => {
    if (!value) {
        return 'Este campo es requerido';
    }
    else if (!isValidEmail(value)) {
        return 'El correo electrónico no es válido';
    }
};

const ForgotPasswordForm = () => {
    const forgotPassword = useUserStore((state) => state.forgotPassword);
    const loading = useUserStore((state) => state.loading);
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);

    const closeModal = () => {
        setOpenModal(false);
        navigate('/');
    };

    const handleSubmit = ({ email }) => {
        forgotPassword(email, setOpenModal);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <ModalComponent
                        isOpen={openModal}
                        onClose={closeModal}
                        modalTitle={"Instrucciones enviadas"}
                    >
                        <p>
                            Se han enviado instrucciones sobre cómo restablecer tu contraseña a la dirección de correo electrónico que proporcionaste.
                        </p>
                    </ModalComponent>
                    <Stack spacing={4}>
                        <Field
                            name="email"
                            component={TextInput}
                            label="Correo electrónico"
                            placeholder="Correo electrónico"
                            validate={validateEmail}
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
                                    Enviar instrucciones
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

export default ForgotPasswordForm;
