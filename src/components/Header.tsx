// src/components/Header.tsx
import React from "react"; // React import 추가
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-black w-full h-[5rem] flex justify-center gap-10 items-center relative">
      <Link to={"/"} className="flex items-center">
        <p className="text-white font-bold text-3xl absolute left-10">
          ProjectList
        </p>
      </Link>
      <Link to={"/"} className="text-white">
        main
      </Link>
      <Link to={"/about"}>
        <p className="text-white">about</p>
      </Link>
    </header>
  );
}
