'use client';
import React, { useRef } from "react";
import Image from "next/image";
import { images, sizes, transforms } from "@/components/Animations/Parallax-Scroll/parallax-scroll";
import { useScroll, useTransform, motion } from "framer-motion";

const word = "Parallax Scroll";
const ParallaxScrollFramer = () => {
  const container = useRef<HTMLDivElement | null>(null);
  const letterRef = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['0 1', '1 1'],
  })

  return (
    <div className={'min-h-screen py-8'} ref={container}>
      <div className={'flex flex-col justify-center items-center'}>
        <p>
          {
            word.split("").map((letter, i) => {
              const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -250) - 25])
              return <motion.span className={"font-black text-9xl relative"} style={{top: y}} key={`l_${i}`} >{letter}</motion.span>
            })
          }
        </p>
      </div>
      <div
        className={
          'flex flex-row gap-4 flex-wrap justify-center items-center mt-10'
        }
      >
        {images.map((img, ind) => {
          const y = useTransform(scrollYProgress, [0, 1], [400, Math.floor(Math.random() * -200) - (ind * 75)]);
          const z = useTransform(scrollYProgress, [0, 1], [-100, Math.floor(Math.random() * 300) - (ind * 25)]);

          return (
            <motion.div key={Math.random().toString(32)} className={'perspective-1000 transform-style-3d'} style={{y, z}} transition={{
              bounce: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 2,
              ease: "power3.inOut",
              mass: 1,
            }}>
              <Image
                src={img}
                alt={'pic' + ind}
                width={sizes[ind + 1].width}
                height={sizes[ind + 1].height}
                style={{
                  transform: `translate3d(${transforms[ind].x}rem, ${transforms[ind].y}rem, ${transforms[ind].z}rem)`,
                }}
                ref={el => imagesRef.current[ind] = el}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ParallaxScrollFramer;
