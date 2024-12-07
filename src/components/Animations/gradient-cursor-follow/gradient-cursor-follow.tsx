'use client';
import React, { useEffect, useRef } from "react";
import classes from "./main.module.scss"

const GradientCursorFollow = () => {
  const wRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!wRef.current) return;
      const x = event.clientX;
      const y = event.clientY;
      // document.documentElement.style.setProperty('--x', `${x}px`);
      // document.documentElement.style.setProperty('--y', `${y}px`);
      wRef.current.style.setProperty('--x', `${x}px`);
      wRef.current.style.setProperty('--y', `${y}px`);
    }
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);
  return (
    <div ref={wRef} className={`w-screen h-screen ${classes.gradient} flex justify-center items-center`}>
      <div className={'text-xl text-uppercase'}>Hello world</div>
    </div>
  );
};

export default GradientCursorFollow;