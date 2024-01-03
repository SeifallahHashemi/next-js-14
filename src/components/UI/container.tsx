import React from 'react';
import { cn } from "@/utils/tailwind-merger";

type ContainerProps = {
  children: React.ReactNode,
  className?: string | undefined
}

const Container:React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)}>
      {children}
    </div>
  );
};

export default Container;