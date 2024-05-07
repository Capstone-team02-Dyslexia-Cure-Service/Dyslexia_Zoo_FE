import { Suspense } from "react";
import { BrowserRouter as RootRouter } from "react-router-dom";

import AuthRouter from "./AuthRouter";

import Loading from "./component/Loading";

const PageRouter = () => (
  <Suspense fallback={<Loading />}>
    <RootRouter>
      <AuthRouter />
    </RootRouter>
  </Suspense>
);

export default PageRouter;
