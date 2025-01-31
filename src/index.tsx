// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // 생성한 router 가져오기
import "./styles/input.css"; // Tailwind CSS 스타일 파일 임포트
import { App } from "./router/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
