'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const [mVariants, setMVariants] = useState("default");
  useEffect(() => {
    const onMouseMoveHandler = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.addEventListener('mousemove', onMouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', onMouseMoveHandler)
    }
  }, []);

  const onHoveredHandler = () => setMVariants("hovered")
  const onLeavedHandler = () => setMVariants("default")

  const variants: any = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10
    },
    hovered: {
      x: mousePos.x - 24,
      y: mousePos.y - 24,
      scale: 2,
      backgroundColor: "#881337",
      mixBlendMode: "difference"
    }
  }
  return (
    <div className={'w-screen h-screen flex justify-center items-center bg-rose-900 font-black cursor-none'}>
      <h1 className={"text-6xl p-6"} onMouseEnter={onHoveredHandler} onMouseLeave={onLeavedHandler}>S E P E H R</h1>
      <motion.div className={"fixed top-0 left-0 w-8 aspect-square rounded-full bg-black pointer-events-none"} variants={
        variants
      } animate={mVariants}></motion.div>
    </div>
  );
};

export default CustomCursor;