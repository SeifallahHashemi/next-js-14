import React from "react";
import Letter from "@/components/Animations/Text Bounce/letter";

const TextBounceAnimation = () => {
  const text = "S E P E H R";
  return (
    <main className={"w-full h-screen flex justify-center items-center"}>
      {text.split("").map((word, index) => {
        return <Letter key={index}>{word === " " ? "\u00A0" : word}</Letter>
      })}
    </main>
  );
};

export default TextBounceAnimation;