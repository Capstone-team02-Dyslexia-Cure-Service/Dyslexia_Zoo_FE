import { Suspense } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";

import AuthRouter from "./AuthRouter";
import AppStyles from "./AppStyles";

import { Loading, StatusMessage, Success } from "@/entities";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <StatusMessage />
    <Success />
    <RootRouter>
      <AppStyles />
      <AuthRouter />
    </RootRouter>
  </Suspense>
);

export default PageRouter;
