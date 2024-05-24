import { useEffect, lazy } from "react";
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";

import { useUserState, PAGE_URL } from "../shared";

const SignIn = lazy(() => import("../pages/auth/signIn/SignInPage"));
const BasicTest = lazy(() => import("../pages/auth/basicTest/BasicTestPage"));
const Home = lazy(() => import("../pages/home/HomePage"));
const Penguin = lazy(() => import("../pages/play/PenguinPage"));
const Store = lazy(() => import("../pages/store/StorePage"));
const Statistic = lazy(() => import("../pages/statistic/StatisticPage"));
const Dolphin = lazy(() => import("../pages/play/DolphinPage"));

const AuthRouter = () => {
  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) navigate(PAGE_URL.SignIn);
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<Navigate to={PAGE_URL.SignIn} replace />} />
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
        <Route path={PAGE_URL.BasicTest} element={<BasicTest />} />

        <Route path={PAGE_URL.Home} element={<Home />} />
        <Route path={PAGE_URL.Store} element={<Store />} />
        <Route path={PAGE_URL.Statistic} element={<Statistic />} />

        <Route path={PAGE_URL.Dolphin} element={<Dolphin />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
