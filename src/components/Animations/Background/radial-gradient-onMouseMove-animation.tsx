"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const svgPosInfo = ref.current?.getBoundingClientRect();
  const svgLeft = svgPosInfo?.left ?? 0;
  const svgTop = svgPosInfo?.top ?? 0;
  const svgWidth = svgPosInfo?.width ?? 0;
  const svgHeight = svgPosInfo?.height ?? 0;

  const svgCenterX = svgLeft + svgWidth / 2;
  const svgCenterY = svgTop + svgHeight / 2;

  const deltaX = mouse.x - svgCenterX;
  const deltaY = mouse.y - svgCenterY;

  function mouseMoveHandler(e: MouseEvent) {
    setMouse({ x: e.clientX, y: e.clientY });
  }

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <div className="absolute flex justify-center items-center h-screen">
      <div ref={ref} className="blur-[150px]">
        <motion.div
          animate={{
            translateX: deltaX * 0.1,
            translateY: deltaY * 0.1,
          }}
          transition={{
            ease: "easeOut",
          }}
        >
          <svg viewBox="0 0 960 540" width="960" height="540">
            <g transform="translate(475.63821504289297 281.0882004646614)">
              <motion.path
                d="M171.9 -138.3C210.9 -88.2 222.4 -17.4 203.8 39.3C185.1 96 136.1 138.5 86.5 151.7C36.9 164.9 -13.5 148.7 -49.9 123.5C-86.4 98.3 -109 64.2 -133.6 14C-158.1 -36.1 -184.6 -102.2 -162.7 -148.4C-140.7 -194.6 -70.4 -220.8 -2 -219.2C66.5 -217.7 132.9 -188.3 171.9 -138.3"
                fill="#88397d"
                animate={{
                  d: [
                    "M171.9 -138.3C210.9 -88.2 222.4 -17.4 203.8 39.3C185.1 96 136.1 138.5 86.5 151.7C36.9 164.9 -13.5 148.7 -49.9 123.5C-86.4 98.3 -109 64.2 -133.6 14C-158.1 -36.1 -184.6 -102.2 -162.7 -148.4C-140.7 -194.6 -70.4 -220.8 -2 -219.2C66.5 -217.7 132.9 -188.3 171.9 -138.3",
                    "M178.3 -132.7C215.8 -95.1 220.5 -21.8 202.5 41.8C184.4 105.4 143.6 159.5 95.2 173.4C46.9 187.4 -9.1 161.3 -48.2 130.7C-87.3 100.1 -109.4 65.1 -126.6 20.2C-143.8 -24.7 -155.9 -79.4 -134 -113.4C-112.1 -147.4 -56 -160.7 7.2 -166.4C70.4 -172.1 140.7 -170.2 178.3 -132.7",
                    "M176.8 -120.6C218.5 -88.6 234.5 -15.7 219.8 50.7C205.1 117.1 159.6 177 99 206.5C38.5 236.1 -37.2 235.2 -83.2 201.8C-129.2 168.5 -145.5 102.7 -161.9 35.6C-178.3 -31.5 -194.7 -99.9 -167.7 -128.6C-140.7 -157.2 -70.4 -146.1 -1.4 -145C67.5 -143.8 135 -152.7 176.8 -120.6",
                  ],
                  fill: ["#88397d", "#8f3370", "#902f69"],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  duration: 5,
                }}
              />
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}