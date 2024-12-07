'use client';
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const ButtonWrapper = () => {
  return (
    <div className="flex min-h-[200px] items-center justify-center bg-slate-800 px-4">
      <SpotlightButton />
    </div>
  );
};

const SpotlightButton: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      const { width } = e.target.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;


      if (spanRef.current) {
        spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
      }
    };

    const handleMouseLeave: React.MouseEventHandler<HTMLButtonElement> = () => {
      if (spanRef.current) {
        spanRef.current.animate(
          { left: '50%' },
          { duration: 100, fill: 'forwards' }
        );
      }
    };

    const btn = btnRef.current;
    if (btn) {
      btn.addEventListener('mousemove', handleMouseMove);
      btn.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (btn) {
        btn.removeEventListener('mousemove', handleMouseMove);
        btn.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-slate-950 px-4 py-3 text-lg font-medium text-white"
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Hover me
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;
