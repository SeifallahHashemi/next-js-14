'use client'
import React, { useEffect, useState } from "react";
import Images, { ImagesSrc, SPRING_OPTIONS } from "@/components/swipe-carousel/Images";
import { motion, useMotionValue, useMotionValueEvent } from "framer-motion";
import Dots from "@/components/swipe-carousel/dots";

const DRAG_BUFFER = 50;
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 2;
const SwipeCarousel = () => {
  const [dragging, setDragging] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);
  const dragXProgress = useMotionValue(0);

  useMotionValueEvent(dragX, "change", (latest) => {
    if (typeof latest === "number" && dragging) {
      dragXProgress.set(latest);
    } else {
      dragXProgress.set(0)
    }
  })

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragXProgress.get();

      if (x === 0) {
        setImgIndex(prevState => {
          if (prevState === ImagesSrc.length - 1) {
            return 0;
          }
          return prevState + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragStart = () => {
    setDragging(true);
  }
  const onDragEnd = () => {
    setDragging(false);
    console.log(dragX.get());
    if (dragX.get() <= -DRAG_BUFFER && imgIndex < ImagesSrc.length - 1) {
      setImgIndex(prevState => prevState + 1);
    } else if (dragX.get() >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex(prevState => prevState - 1);
    }
  }

  return (
    <div className={"relative min-h-screen overflow-hidden bg-neutral-950 py-8"}>
      <motion.div
        drag={"x"}
        dragConstraints={{ left: 0, right: 0 }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        style={{
          x: dragX,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={"flex items-center cursor-grab active:cursor-grabbing"}>
        <Images imgIndex={imgIndex} />
      </motion.div>
      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

export default SwipeCarousel;

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};