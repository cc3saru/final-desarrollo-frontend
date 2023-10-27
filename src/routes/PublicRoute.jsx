import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../componets/Loader/Loader";
import useUserStore from "../zustand/user";

const PublicRoute = ({ children }) => {
  const getMe = useUserStore((state) => state.getMe);
  const me = useUserStore((state) => state.me);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  } else if (me && me.email) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default PublicRoute;
