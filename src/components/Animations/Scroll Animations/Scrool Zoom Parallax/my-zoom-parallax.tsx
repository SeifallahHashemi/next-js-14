'use client';
import React, { useRef } from "react";
import {useScroll, useTransform, motion} from "framer-motion";
import Picture1 from './../../../../../public/images/picture1.jpg';
import Picture2 from './../../../../../public/images/picture2.jpg';
import Picture3 from './../../../../../public/images/picture3.jpg';
import Picture4 from './../../../../../public/images/picture4.jpg';
import Picture5 from './../../../../../public/images/picture5.jpg';
import Picture6 from './../../../../../public/images/picture6.jpg';
import Picture7 from './../../../../../public/images/picture7.jpg';
import classes from "./my-zoom-parallax.module.scss";
import Image from "next/image";

const MyZoomParallax = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture4,
      scale: scale7,
    },
    {
      src: Picture5,
      scale: scale8,
    },
    {
      src: Picture6,
      scale: scale9,
    },
    {
      src: Picture7,
      scale: scale10,
    },
  ]
  return (
    <section ref={containerRef} className={"relative h-[300vh] overflow-clip"}>
      <div className={"sticky top-0 h-screen"}>
        {pictures.map((item, index) => (
          <motion.div style={{
            scale: item.scale,
          }} className={`absolute top-0 left-0 w-full h-full flex justify-center items-center ${classes.parent}`} key={index}>
            <motion.div className={`w-[20vw] h-[20vh] relative ${classes.imageContainer}`}>
              <Image src={item.src} alt={"pic"+index} fill placeholder={"blur"} objectFit="cover" />
            </motion.div>
          </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default MyZoomParallax;