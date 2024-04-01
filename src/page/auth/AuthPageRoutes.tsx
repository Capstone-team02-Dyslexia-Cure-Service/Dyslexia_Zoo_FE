import { lazy } from "react";
import { PAGE_URL } from "@/config/path";
import { Route, Routes } from "react-router-dom";

const SignIn = lazy(() => import("./signIn/SignInPage"));

const AuthPageRouter = () => (
  <Routes>
    <Route path={PAGE_URL.SignIn} element={<SignIn />} />
  </Routes>
);

export default AuthPageRouter;
