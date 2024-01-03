import React from "react";
import { cn } from "@/utils/tailwind-merger";

interface Props {
  strength: 0 | 1 | 2 | 3;
}
const ShowPasswordStrength = ({ strength }: Props) => {
  console.log(strength);
  return (
    <div className={"flex gap-2"}>
      {Array.from({ length: strength + 1}).map((i, index) => (
        <div key={index} className={cn("h-2 w-32 rounded-md", {
          "bg-red-500": strength === 0,
          "bg-orange-500": strength === 1,
          "grow bg-yellow-500": strength === 2,
          "grow bg-green-500": strength === 3,
        })}></div>
      ))}
    </div>
  );
};

export default ShowPasswordStrength;