import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import EmailVerificationSuccess from "./EmailVerificationSuccess";
import InvalidToken from "../../../componets/InvalidToken/InvalidToken";
import LoaderWithBlur from "../../../componets/Loader/LoaderWithBlur";

import useUserStore from "../../../zustand/user";

const ConfirmEmail = () => {
    const confirmEmail = useUserStore((state) => state.confirmEmail);
    const loading = useUserStore((state) => state.loading);
    
    const [confirmEmailSuccess, setConfirmEmailSuccess] = useState(false);
    const [token, setToken] = useState(null);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        const token = searchParams.get("token");
        setToken(token);
    }, [searchParams]);

    useEffect(() => {
        if (token) {
            confirmEmail(token, setConfirmEmailSuccess);
        }
    }, [token]);

    if (loading) {
        return <LoaderWithBlur />;
    }

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                p: 4,
            }}
        >
            {
                confirmEmailSuccess ? (
                    <EmailVerificationSuccess />
                ) : (
                    <InvalidToken />
                )
            }
        </div>
    );
};

export default ConfirmEmail;