'use client';

import { useEffect } from 'react';

import { motion, useSpring, useTime, useTransform } from 'framer-motion';

export default function BorderAnimation() {
  const time = useTime();

  // Rotating animation
  const rotate = useTransform(time, [0, 3000], [0, 360], {
    clamp: false,
  });
  const rotatingBg = useTransform(rotate, (r) => {
    return `conic-gradient(from ${r}deg, #ff4545, #00ff99, #006aff, #ff0095, #ff4545)`;
  });

  // Pulsing animation
  const pulse = useSpring(0, { damping: 0, mass: 5, stiffness: 10 });
  const pulsingBg = useTransform(pulse, (r) => {
    return `blur(${r}px)`;
  });

  useEffect(() => {
    pulse.set(10);
  }, []);

  return (
    <main className='flex min-h-screen flex-col items-center justify-center gap-20 p-24 bg-neutral-900 text-neutral-100'>
      {/* Rotating gradient */}
      <div className='relative'>
        <button className='relative bg-neutral-700 px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 z-10'>
          Subscribe to Built With Code
        </button>
        <motion.div
          className='absolute -inset-[1px] rounded-md'
          style={{
            background: rotatingBg,
          }}
        />
      </div>
      {/* Pulsing gradient */}
      <div className='relative'>
        <button className='relative bg-neutral-700 px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-200 z-10'>
          Subscribe to Built With Code
        </button>
        <div
          className='absolute -inset-[1px] rounded-md'
          style={{
            background:
              'conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)',
          }}
        />
        <motion.div
          className='absolute -inset-[1px] rounded-md opacity-50'
          style={{
            background:
              'conic-gradient(#ff4545, #00ff99, #006aff, #ff0095, #ff4545)',
            filter: pulsingBg,
          }}
        />
      </div>
    </main>
  );
}
