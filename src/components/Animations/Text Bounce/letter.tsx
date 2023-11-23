'use client'
import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Element = React.HTMLAttributes<HTMLSpanElement>;
const Letter = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimationControls();
  const [isPlaying, setIsPlaying] = useState(false);

  const startAnimate = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, 0.55, 1)",
        "scale3d(0.75, 1.25, 1)",
        "scale3d(1.25, 0.85, 1)",
        "scale3d(0.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      color: ["#dbf3f7", "#4bc8d2", "#3474d8", "#fff"],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
    setIsPlaying(true);
  };
  const onMouseOverAnimationHandler = () => {
    if (!isPlaying) startAnimate();
  };
  return (
    <motion.span
      className={"inline-block text-5xl dark:text-white py-2"}
      animate={controls}
      onMouseOver={onMouseOverAnimationHandler}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  );
};

export default Letter;