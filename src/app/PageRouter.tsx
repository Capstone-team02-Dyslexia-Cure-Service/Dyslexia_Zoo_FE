import { Suspense } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";

import AuthRouter from "./AuthRouter";

import { Loading } from "@/entities";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AuthRouter />
    </RootRouter>
  </Suspense>
);

export default PageRouter;
