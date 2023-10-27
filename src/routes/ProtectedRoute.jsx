import { useLayoutEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import Loader from "../componets/Loader/Loader";
import Main from "../componets/Container/Main";

import useUserStore from "../zustand/user";

const ProtectedRoute = ({ children }) => {
    const getMe = useUserStore((state) => state.getMe);
    const me = useUserStore((state) => state.me);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            getMe()
                .then(() => {
                    setLoading(false);
                })
                .catch((error) => {
                    console.error("Error getting user data", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [getMe]);

    if (loading) {
        return <Loader />;
    } else if (!me || !me.email) {
        return <Navigate to="/" />;
    }

    return (
        <Main>
            {children}
        </Main>
    );
};

export default ProtectedRoute;
