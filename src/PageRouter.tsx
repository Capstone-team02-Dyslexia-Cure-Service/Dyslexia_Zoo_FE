import { Suspense, lazy } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import Loading from "./component/Loading";
import { PAGE_URL } from "./config/path";

const SignIn = lazy(() => import("./page/auth/signIn/SignInPage"));

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <Routes>
        <Route path={PAGE_URL.SignIn} element={<SignIn />} />
      </Routes>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
