import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Loading from "./component/Loading";
import { PAGE_URL } from "./config/path";

const SignIn = lazy(() => import("./page/auth/signIn/SignInPage"));
const BasicTest = lazy(() => import("./page/auth/basicTest/BasicTestPage"));
const Home = lazy(() => import("./page/home/HomePage"));

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <Routes>
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
        <Route path={PAGE_URL.BasicTest} element={<BasicTest />} />
        <Route path={PAGE_URL.Home} element={<Home />} />
      </Routes>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
