import { useState } from "react";

interface CardProp {
  firstText: string;
  secondText: string;
}

export function Card({ firstText, secondText }: CardProp) {
  const [isHovered, setIsHoverd] = useState(false);
  return (
    <>
      <div
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        className="felx  text-2xl w-64 h-80 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:bg-black hover:text-white "
      >
        <p className="mx-4  h-full mt-56">
          {isHovered ? secondText : firstText}
        </p>
      </div>
    </>
  );
}
