/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext.jsx";
import axios from "axios";

export default function ProtectedLayout() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  }

  useEffect(() => {
    if (!user) {
      return <Navigate to="/" />;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auto-login`, {}, config)
      .then(() => {})
      .catch(() => {
        logout();
      });
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
