import ReactDOM from "react-dom/client";

import PageRouter from "./app/PageRouter";

/* async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mock/browser");
  return worker.start();
}
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(<PageRouter />);
}); */

ReactDOM.createRoot(document.getElementById("root")!).render(<PageRouter />);
