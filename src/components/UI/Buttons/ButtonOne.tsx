import React from "react";
import { cn } from "@/utils/tailwind-merger";

interface ButtonOneProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}
const ButtonOne = ({ className, children,...props }: ButtonOneProps) => {
  return (
    <button {...props} className={cn("btn btn-primary", className)}>
      {children}
    </button>
  );
};

export default ButtonOne;