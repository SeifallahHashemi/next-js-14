'use client'
import React, { useRef, useLayoutEffect, useEffect } from "react";
import Image from 'next/image';

import image2 from '@/../public/images/pic - (7).jpg';
import image3 from '@/../public/images/pic - (8).jpg';
import image4 from '@/../public/images/pic - (9).jpg';
import image1 from '@/../public/images/pic1.jpg';

import GsapParallax from '@/components/Animations/Parallax-Scroll/gsap-parallax';
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

interface Size {
  width: number;
  height: number;
}

export const images = [image1, image2, image3, image4];
export const sizes: Record<number, Size> = {
  1: {
    width: 640,
    height: 480,
  },
  2: {
    width: 320,
    height: 240,
  },
  3: {
    width: 520,
    height: 380,
  },
  4: {
    width: 780,
    height: 640,
  },
} as const;

export const transforms = [
  {
    x: 10,
    y: 6,
    z: -10,
  },
  {
    x: 0,
    y: 0,
    z: 1,
  },
  {
    x: -10,
    y: 2,
    z: 1,
  },
  {
    x: 0,
    y: -20,
    z: -10,
  },
];
const ParallaxScroll = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const letterRef = useRef<HTMLHeadingElement | null>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect( () => {

    const context = gsap.context( () => {

      const tl = gsap.timeline({

        scrollTrigger: {

          trigger: containerRef.current,

          start: "top bottom",

          end: "bottom top",

          scrub: true,

        },
      })
        .to(letterRef.current, {x: -1000, duration: 2}, 0)
      imagesRef.current.forEach((img, ind) => {
        tl.to(img, { x: "0", y: "0", z: ind === 1 ? "30rem" : "0", duration: 2, ease: "power3.inOut" }, 0)
      });
    })
    return () => context.revert();

  }, [])
  return (
    <GsapParallax>
      <div className={'min-h-screen py-8'} ref={containerRef}>
        <div className={'flex flex-col justify-center items-center'}>
          <h2 ref={letterRef} className={'font-black text-center text-9xl translate-x-[1500px]'}>
            Parallax Scrolling
          </h2>
          <p className={'text-2xl'}>with gsap</p>
        </div>
        <div
          className={
            'flex flex-row gap-4 flex-wrap justify-center items-center mt-10'
          }
        >
          {images.map((img, ind) => {
            return (
              <div key={ind} className={'perspective-1000 transform-style-3d'}>
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
              </div>
            );
          })}
        </div>
      </div>
    </GsapParallax>
  );
};

export default ParallaxScroll;
