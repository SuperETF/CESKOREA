import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ✅ 반드시 이 줄 있어야 Tailwind 적용됨
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
