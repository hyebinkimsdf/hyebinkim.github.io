import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home"; // Home 컴포넌트 임포트
import { App } from "./App"; // App 컴포넌트 임포트
import React from "react";
// src/index.tsx
import "./styles/input.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App 컴포넌트를 렌더링
    children: [
      {
        path: "/",
        element: <Home />, // Home 컴포넌트를 렌더링
      }, // 여기에 콤마 추가 필요
    ],
  },
]);

export default router;
