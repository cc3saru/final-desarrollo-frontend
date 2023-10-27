import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import InvalidToken from "../componets/InvalidToken/InvalidToken";
import LoaderWithBLur from "../componets/Loader/LoaderWithBlur";

import useUserStore from "../zustand/user";

const VerifyTokenRoute = ({ children }) => {
    const [token, setToken] = useState(null);

    const [searchParams] = useSearchParams();

    const loading = useUserStore((state) => state.loading);
    const validToken = useUserStore((state) => state.validToken);
    const verifyToken = useUserStore((state) => state.verifyToken);

    useEffect(() => {
        const token = searchParams.get("token");
        setToken(token);
    }, [searchParams]);

    useEffect(() => {
        if (token) {
            verifyToken(token);
        }
    }, [token]);

    if (loading) {
        return <LoaderWithBLur />;
    }

    if (!validToken) {
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
                <InvalidToken />
            </div>
        );
    }

    return (
        <>
            {children}
        </>
    );
};

export default VerifyTokenRoute;