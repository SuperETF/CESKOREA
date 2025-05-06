import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 반드시 이 줄이 있어야 TailwindCSS 클래스가 적용됩니다
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
