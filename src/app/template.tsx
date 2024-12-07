'use client'
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}