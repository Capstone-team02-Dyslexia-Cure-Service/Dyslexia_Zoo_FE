import { Suspense } from "react";
import { BrowserRouter as RootRouter, Routes, Route } from "react-router-dom";

import AuthPageRouter from "./page/auth/AuthPageRoutes";
import Loading from "./component/Loading";
import { PAGE_URL } from "./config/path";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <Routes>
        <Route path={PAGE_URL.Auth} element={<AuthPageRouter />} />
      </Routes>
    </RootRouter>
  </Suspense>
);

export default PageRouter;
