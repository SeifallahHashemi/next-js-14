'use client'
import React, {useEffect, useRef, useState} from "react";
import { motion } from "framer-motion";


const BlobPage = () => {
    const [mouse, setMouse] = useState({ x: 0, y: 0})
    const ref = useRef<HTMLDivElement>(null);

    const svgPos = ref.current?.getBoundingClientRect();
    const svgLeft = svgPos?.left ?? 0;
    const svgTop = svgPos?.top ?? 0;
    const svgWidth = svgPos?.width ?? 0;
    const svgHeight = svgPos?.height ?? 0;

    const svgCenterX = svgLeft + svgWidth / 2;
    const svgCenterY = svgTop+ svgHeight / 2;

    const deltaX = mouse.x - svgCenterX;
    const deltaY = mouse.y - svgCenterY;
    const mouseMoveHandler = (e: MouseEvent) => {
        setMouse({ x: e.clientX, y: e.clientY })
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        return () => window.removeEventListener('mousemove', mouseMoveHandler)
    }, [])
  return (
    <div className={"h-screen flex justify-center items-center"}>
        <div className={"blur-[80px]"} ref={ref}>
            <motion.div animate={{
                translateX: deltaX * 0.1,
                translateY: deltaY * 0.1,
            }}
            transition={{
                ease: "easeOut"
            }}>
                <svg
                    viewBox="0 0 900 900"
                    width="400"
                    height="400"
                >
                    <g transform="translate(461.3690985738454 405.13053541517183)">
                        <motion.path
                            d="M236.3 -217.1C304.3 -168.3 356.1 -84.1 340.6 -15.6C325 53 242.1 106.1 174.1 181.1C106.1 256.1 53 353 -8.5 361.5C-70 370 -140 290 -214.8 215C-289.7 140 -369.3 70 -366 3.3C-362.7 -63.4 -276.5 -126.8 -201.6 -175.6C-126.8 -224.5 -63.4 -258.7 10.4 -269.1C84.1 -279.5 168.3 -266 236.3 -217.1"
                            fill="#BB004B"
                            animate={{
                                d: [
                                    "M273.1 -268.3C334.1 -212.1 350.1 -106.1 343.8 -6.2C337.6 93.6 309.1 187.1 248.1 224.6C187.1 262.2 93.6 243.6 -2.1 245.7C-97.8 247.8 -195.6 270.6 -254.8 233.1C-314 195.6 -334.5 97.8 -332 2.5C-329.5 -92.9 -304.1 -185.7 -244.9 -241.9C-185.7 -298.1 -92.9 -317.5 6.6 -324.1C106.1 -330.7 212.1 -324.5 273.1 -268.3",
                                    "M238.3 -220C294.6 -182 316.3 -91 323.9 7.5C331.4 106.1 324.8 212.1 268.5 249.6C212.1 287.1 106.1 256.1 21.3 234.7C-63.4 213.4 -126.8 201.8 -182 164.3C-237.1 126.8 -284.1 63.4 -303.4 -19.3C-322.7 -102.1 -314.5 -204.1 -259.3 -242.1C-204.1 -280.1 -102.1 -254.1 -5.5 -248.5C91 -243 182 -258 238.3 -220",
                                    "M188.4 -180.6C251.9 -124.9 316.5 -62.5 330 13.6C343.6 89.6 306.1 179.1 242.6 216.6C179.1 254.1 89.6 239.6 -3.9 243.5C-97.3 247.4 -194.7 269.7 -262.4 232.2C-330 194.7 -368 97.3 -372.4 -4.4C-376.7 -106.1 -347.5 -212.1 -279.8 -267.8C-212.1 -323.5 -106.1 -328.7 -21.8 -306.9C62.5 -285.1 124.9 -236.3 188.4 -180.6",
                                    "M224.6 -236.6C262.2 -187.1 243.6 -93.6 242.6 -0.9C241.7 91.7 258.4 183.4 220.9 228.9C183.4 274.4 91.7 273.7 6.7 267C-78.3 260.3 -156.5 247.5 -231.5 202C-306.5 156.5 -378.3 78.3 -380.3 -2C-382.3 -82.3 -314.5 -164.5 -239.5 -214C-164.5 -263.5 -82.3 -280.3 5.7 -285.9C93.6 -291.6 187.1 -286.1 224.6 -236.6",
                                    "M157.6 -155.6C209.1 -106.1 259 -53 270.2 11.2C281.4 75.4 253.8 150.8 202.3 225.8C150.8 300.8 75.4 375.4 -12.6 388C-100.6 400.6 -201.3 351.3 -257.8 276.3C-314.3 201.3 -326.6 100.6 -315.7 11C-304.7 -78.7 -270.4 -157.4 -213.9 -206.9C-157.4 -256.4 -78.7 -276.7 -12.8 -263.9C53 -251 106.1 -205.1 157.6 -155.6",
                                ],
                                fill: ["#272c5a", "#303043", "#2a376a", "#1c2583"],
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
};

export default BlobPage;