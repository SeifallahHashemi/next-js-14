'use client'
import React from "react";
import { motion } from "framer-motion";
import Background from "@/components/cards/SquishyCard/Background";

const Card = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $299/
          <br />
          Month
        </motion.span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem.
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Get it now
      </button>
      <Background />
    </motion.div>
  );
};

export default Card;