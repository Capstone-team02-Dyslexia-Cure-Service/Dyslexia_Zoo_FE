import { useEffect, lazy } from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

import useUserState from "./store/userStore";
import { PAGE_URL } from "./config/path";

const SignIn = lazy(() => import("./page/auth/signIn/SignInPage"));
const BasicTest = lazy(() => import("./page/auth/basicTest/BasicTestPage"));
const Home = lazy(() => import("./page/home/HomePage"));
const Penguin = lazy(() => import("./page/play/PenguinPage"));
const Store = lazy(() => import("./page/store/StorePage"));
const Statistic = lazy(() => import("./page/statistic/StatisticPage"));

const AuthRouter = () => {
  const isSignIn = useUserState((state) => state.isSignIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignIn) navigate(PAGE_URL.SignIn);
  }, []);

  return (
    <>
      <Routes>
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
        <Route path={PAGE_URL.BasicTest} element={<BasicTest />} />

        <Route path={PAGE_URL.Home} element={<Home />} />
        <Route path={PAGE_URL.Store} element={<Store />} />
        <Route path={PAGE_URL.Statistic} element={<Statistic />} />

        <Route path={PAGE_URL.Penguin} element={<Penguin />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
