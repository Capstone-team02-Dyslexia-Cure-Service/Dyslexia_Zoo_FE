import React from "react";
import { render } from "react-dom";

import PageRouter from "./PageRouter";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mock/browser");
  return worker.start();
}

enableMocking().then(() => {
  render(
    <React.StrictMode>
      <PageRouter />
    </React.StrictMode>,
    document.getElementById("root")
  );
});
