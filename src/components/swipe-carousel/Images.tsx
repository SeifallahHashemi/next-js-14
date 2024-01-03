'use client';
import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';

export const ImagesSrc = [
  './images/pic1.jpg',
  './images/pic2.jpg',
  './images/pic3.jpg',
  './images/pic4.jpg',
  './images/pic5.jpg',
  './images/pic6.jpg',
];
export const SPRING_OPTIONS = {
  type: 'spring',
  damping: 50,
  stiffness: 400,
  mass: 3,
  // delay: 0.4,
};
const Images = ({ imgIndex }: { imgIndex: number }) => {
  return (
    <>
      {ImagesSrc.map((src, ind) => {
        return (
          <motion.div
            key={ind}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className={
              'aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover'
            }
            animate={{
              scale: imgIndex === ind ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
          />
        );
      })}
    </>
  );
};

export default Images;
