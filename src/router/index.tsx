import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/Home"; // Home 컴포넌트 임포트
import { Design01 } from "../components/Design01";
import { About } from "../components/About";
import { App } from "./App"; // App 컴포넌트 임포트
import React from "react";
import { Design03 } from "../components/Design03";
import { Design02 } from "../components/Design02";
// src/index.tsx

const router = createBrowserRouter([
  {
    path: "",
    element: <App />, // App 컴포넌트를 렌더링
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/eyecane",
        element: <Design01 />,
      },
      {
        path: "/swim360",
        element: <Design02 />,
      },
      {
        path: "/droneGO",
        element: <Design03 />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
