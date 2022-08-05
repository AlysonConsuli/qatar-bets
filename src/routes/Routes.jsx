import { Route, Routes } from "react-router-dom";

import {
  AuthDefaultPage,
  DefaultHomePage,
  DefaultPage,
} from "../layouts/DefaultPage";
import { HomeLayout } from "../layouts/HomeLayout";
import ProtectedLayout from "../layouts/ProtectedLayout";
import { AddBets } from "../pages/AddBets";
import { Homepage } from "../pages/Homepage";
import { Signin } from "../pages/Signin";
import { SignUp } from "../pages/Signup";

export const Router = () => {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route element={<AuthDefaultPage />}>
          <Route path="/" element={<Signin />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route element={<DefaultHomePage />}>
          <Route path="/homepage" element={<Homepage />} />
        </Route>
        <Route element={<DefaultPage />}>
          <Route path="/add-bets" element={<AddBets />} />
        </Route>
      </Route>
    </Routes>
  );
};
