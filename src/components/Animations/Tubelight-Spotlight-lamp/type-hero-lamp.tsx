'use client';
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const variants = {
  initial: {
    scale: 1.5,
  },
  animate: {
    scale: 3,
  }
}
const TypeHeroLamp = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['0 1', '1.2 1'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 3]);

  return (
    <div ref={container} className={"bg-black"}>
      <div className="lamp-container">
        {/*<motion.div style={{scale}} transition={{ duration: 0.5, type: "spring", stiffness: 100, mass: 0.5, damping: 300, velocity: 2 }} className="lamp lamp translate-z-0 translate-y-[-180px] scale-50 animate-none duration-1000"></motion.div>*/}
        <motion.div variants={variants} initial={"initial"} whileInView={"animate"} viewport={{
          once: true,
        }} className="lamp lamp translate-z-0 translate-y-[-180px] scale-50 animate-none duration-1000"></motion.div>
      </div>
    </div>
  );
};

export default TypeHeroLamp;