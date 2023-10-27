import create from 'zustand';
import { axiosInstance, axiosInstanceAuth } from '../axios/axios';
import { toast } from "react-hot-toast";

const useUserStore = create((set) => ({
    me: {},
    loading: false,
    validToken: false,
    setMe: (me) => set({ me }),
    setLoading: (loading) => set({ loading }),
    login: async (email, password, navigate) => {
        return new Promise((resolve, reject) => {
            set({ loading: true });

            axiosInstance.post('auth/login/', { email, password })
                .then((response) => {
                    const { token } = response.data;
                    localStorage.setItem('token', token);
                    navigate('/home');
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error(error);
                    toast.error('Correo o contraseña incorrectos o correo no confirmado', {
                        duration: 6000,
                        position: 'top-right',
                    });
                    reject(error);
                })
                .finally(() => {
                    set({ loading: false });
                });
        });
    },
    logout: (navigate) => {
        set({ me: null });
        localStorage.removeItem('token');
        navigate('/');
    },
    getMe: async () => {
        try {
            const response = await axiosInstanceAuth.get('users/get_me/');
            set({ me: response.data });
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    register: async (first_name, last_name, email, password, setOpenModal) => {
        return new Promise((resolve, reject) => {
            set({ loading: true });

            axiosInstance.post('users/create_user/', { first_name, last_name, email, password })
                .then((response) => {
                    setOpenModal(true);
                    resolve(response.data);
                })
                .catch((error) => {
                    if (error.response && error.response.status === 409) {
                        toast.error('Este correo ya está registrado', {
                            duration: 6000,
                            position: 'top-right',
                        });
                    } else {
                        toast.error('Error al registrarse', {
                            duration: 6000,
                            position: 'top-right',
                        });
                    }

                    reject(error);
                })
                .finally(() => {
                    set({ loading: false });
                });
        });
    },
    confirmEmail: async (token, setConfirmEmailSuccess) => {
        return new Promise((resolve, reject) => {
            set({ loading: true });

            axiosInstance.post('users/confirm_email/', { token })
                .then((response) => {
                    resolve(response.data);
                    setConfirmEmailSuccess(true);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
                .finally(() => {
                    set({ loading: false });
                });
        });
    },
    forgotPassword: async (email, setOpenModal) => {
        return new Promise((resolve, reject) => {
            set({ loading: true });

            axiosInstance.post('users/forgot_password/', { email })
                .then((response) => {
                    setOpenModal(true);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
                .finally(() => {
                    set({ loading: false });
                });
        });
    },
    changePassword: async (token, password, navigate, setLoading) => {
        return new Promise((resolve, reject) => {
            setLoading(true);

            axiosInstance.post('users/change_password/', { token, password })
                .then((response) => {
                    navigate('/');
                    toast.success('Contraseña cambiada con éxito', {
                        duration: 6000,
                        position: 'top-right',
                    });
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                })
                .finally(() => {
                    setLoading(false);
                });
        });
    },
    verifyToken: async (token) => {
        return new Promise((resolve, reject) => {
            set({ loading: true });

            axiosInstance.post('users/verify_token/', { token })
                .then((response) => {
                    set({ validToken: true });
                    resolve(response.data);
                })
                .catch((error) => {
                    set({ validToken: false });
                    console.error(error);
                    reject(error);
                })
                .finally(() => {
                    set({ loading: false });
                });
        });
    },
}));

export default useUserStore;