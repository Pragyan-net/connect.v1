"use client";

import { useEffect, useRef, useState } from "react";

export function ScrambleText() {
  const [text, setText] = useState("V1.Connect");
  const intervalRef = useRef<NodeJS.Timeout>();

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = () => {
    let iteration = 0;
    const targetText = "V1.Connect";

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setText(
        targetText
          .split("")
          .map((_, index) => {
            if (index < iteration) {
              return targetText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= targetText.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scramble();
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <h1
      onMouseOver={scramble}
      className="select-none bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-center font-headline text-5xl font-bold text-transparent md:text-8xl lg:text-9xl"
    >
      {text}
    </h1>
  );
}
