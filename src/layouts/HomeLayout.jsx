import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

export const HomeLayout = () => {
  const { user } = useContext(UserContext);

  if (user) {
    return <Navigate to="/homepage" replace={true} />;
  }

  return <Outlet />;
};
