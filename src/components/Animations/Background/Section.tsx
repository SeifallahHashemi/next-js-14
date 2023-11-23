'use client'
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Section = ({ children, theme, setTheme } : { children: React.ReactNode, theme: string, setTheme: (value: string) => void }) => {
  const container = useRef(null);
  let {scrollYProgress} = useScroll({
    target: container,
    offset: ['start center', "end center"]
  })
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme)
    }
  })
  return (
    <section className={"grid grid-cols-2 min-h-screen bg-white dark:bg-black bg-animation"} ref={container}>
      {children}
    </section>
  );
};

export default Section;