'use client';
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { cn } from "@/utils/tailwind-merger";
import ProductContent from "@/components/Animations/DropDown Menu/product-content";
import ClothesContent from "@/components/Animations/DropDown Menu/clothes-content";
import DigitalContent from "@/components/Animations/DropDown Menu/digital-content";

interface TypeProps {
  position: {
    x: number;
  };
  minSize: number;
  isShow: boolean;
  // handleMenu: (state: boolean, menuName: string) => void;
  activeMenu: string
}

const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: 100
  }
}

const Menu = ({ position, minSize, isShow, activeMenu }: TypeProps) => {
  const [isInteraction, setIsInteraction] = useState(false);

  const productRef = useRef<HTMLDivElement | null>(null);
  const clothesRef = useRef<HTMLDivElement | null>(null);
  const digitalRef = useRef<HTMLDivElement | null>(null);

  const clientWidth = useMotionValue<number>(0);
  const clientHeight = useMotionValue<number>(0);

  useLayoutEffect(() => {
    if (!activeMenu) return;
    let width, height;
    switch (activeMenu) {
      case "menuOne":
        width = productRef.current !== null ? productRef.current?.clientWidth : 0;
        height = productRef.current !== null ? productRef.current?.clientHeight : 0;
        break;
      case "menuTwo":
        width = clothesRef.current !== null ? clothesRef.current?.clientWidth : 0;
        height = clothesRef.current !== null ? clothesRef.current?.clientHeight : 0;
        break;
      case "menuThree":
        width = digitalRef.current !== null ? digitalRef.current?.clientWidth : 0;
        height = digitalRef.current !== null ? digitalRef.current?.clientHeight : 0;
        break;
        default:
          return;
    }
    clientWidth.set(width);
    clientHeight.set(height);
  }, [activeMenu, clientWidth, clientHeight]);

  useEffect(() => {
    if (activeMenu !== null) setIsInteraction(false)
    else setIsInteraction(true)
  }, [activeMenu])

  if (!clientWidth || !clientHeight) return;

  const cardProps = {
    initial: {opacity: 0, x: isInteraction ? -70 : 0},
    animate: {opacity: 1, x: 0},
    exit: {opacity: 0, x: isInteraction ? -50 : 0},
    transition: {type: 'spring', stiffness: 80, damping: 14}
  }

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div
          // key={crypto.randomUUID()}
          className={
            'w-full h-fit bg-transparent pointer-events-none absolute inset-0 top-full flex flex-col items-center justify-center isolate origin-center'
          }
          style={{
            originX: 0.5,
            originY: 0,
            transformPerspective: 1000,
          }}
          initial={{
            opacity: 0,
            rotateX: -25,
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
          }}
          exit={{
            opacity: 0,
            rotateX: 25,
          }}
          transition={{
            // duration: 0.15,
            ease: "linear",
            type: "spring",
            mass: 0.15,
            stiffness: 100,
            damping: 10,
          }}
        >
          <AnimatePresence>{(!!position.x || isShow) && <motion.div
            className="triangle bg-transparent rotate-45 w-4 aspect-square absolute top-0 left-0 rounded-tl -translate-y-1/2 -z-0 pointer-events-none"
            initial={{
              opacity: 0,
              left: !!position.x ? position.x - 8 : "50%",
            }}
            animate={{
              opacity: 1,
              left: position.x - 8
            }}
            exit={{
              opacity: 0,
              left: position.x - 8
            }}
            transition={{
              type: "spring",
              duration: 0.25,
              ease: "circInOut"
            }}
          />}</AnimatePresence>
          {/*<motion.div className={"absolute bg-red-950 -translate-y-[10px] -z-30"}
                      onMouseEnter={handleMenu.bind(null, activeMenu)}
                      onMouseLeave={handleMenu.bind(null, activeMenu)}
                      initial={{
                        width: clientWidth+"px",
                        height: clientHeight+"px",
                      }}
                      style={{
                        minWidth: minSize,
                        width: clientWidth,
                        height: clientHeight,
                        overflow: "clip",
                      }}
          />*/}
          <div className={"w-fit h-fit relative"}>
            <motion.div
              className={`card rounded-md after:absolute after:inset-0 after:-translate-y-[10px] after:bg-transparent after:-z-30 pointer-events-auto`}
              initial={{
                width: clientWidth + "px",
                height: clientHeight + "px"
              }}
              style={{
                minWidth: minSize,
                width: clientWidth,
                height: clientHeight,
                transition: "width 0.2s ease-in-out, height 0.2s ease-in-out",
                // overflow: "clip"
              }}
            >
              <AnimatePresence>{activeMenu === "menuOne" &&
                <div className={"w-full h-full relative overflow-clip rounded"}><ProductContent key={crypto.randomUUID()} ref={productRef} productName={activeMenu} /></div>}</AnimatePresence>
              <AnimatePresence>{activeMenu === "menuTwo" &&
                <div className={"w-full h-full relative overflow-clip rounded"}><ClothesContent key={crypto.randomUUID()} ref={clothesRef} productName={activeMenu} /></div>}</AnimatePresence>
          <AnimatePresence>{activeMenu === "menuThree" &&
            <div className={"w-full h-full relative overflow-clip rounded"}><DigitalContent key={crypto.randomUUID()} ref={digitalRef} productName={activeMenu} /></div>}</AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default Menu;
