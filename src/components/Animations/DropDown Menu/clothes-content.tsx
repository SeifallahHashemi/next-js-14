'use client';
import React, { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Beef, Drumstick, Heart, Refrigerator, Settings, Wrench } from "lucide-react";
import {TbTruckDelivery} from "react-icons/tb";
import {TiTickOutline} from "react-icons/ti";
import {GiPayMoney, GiReturnArrow} from "react-icons/gi";
import classes from "./modern-menu.module.css"

export const variants = {
  init: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    }
  }
}

export const children = {
  hide: {
    x: 100,
    opacity: 0,
  },
  show: (ind: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: ind * 0.1,
    }
  })
}

type Ref = HTMLDivElement;
const ClothesContent = forwardRef<Ref, {productName: string}>(({...props }, ref) => {
  return (
    <AnimatePresence>
      {props.productName === "menuTwo" && <motion.div className={`w-[700px] h-[340px] flex flex-col px-2 overflow-clip ${classes.wrapper}`} ref={ref}>
        <motion.div className={"w-full h-fit max-h-full grid grid-cols-2 grid-rows-3 space-y-4"}>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={1}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Refrigerator size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>کاپشن</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={3}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Drumstick size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>هودی</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={5}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Wrench size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>تی شرت</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={7}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Settings size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>شلوار جین</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={9}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Beef size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>شلوار شش جیب</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={11}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Heart size={24}/></span>
            <span className={"font-semibold text-lg font-vazirFont"}>مانتو</span>
          </motion.p>
        </motion.div>
        <motion.footer className={"absolute bottom-0 left-0 w-full h-32 p-2 border-t-1 border-slate-50/10"}
                       variants={children}
                       initial={"hide"} animate={"show"} custom={12} exit={"hide"}>
          <ul className={"w-full h-full grid grid-cols-2 grid-rows-2"}>
          <li className={`${classes['products__listItem']} font-perFont`}><TbTruckDelivery/>ارسال فوری</li>
            <li className={`${classes['products__listItem']} font-perFont`}><TiTickOutline/>ضمانت اصالت کالا</li>
            <li className={`${classes['products__listItem']} font-perFont`}><GiReturnArrow/>بازگشت کالا</li>
            <li className={`${classes['products__listItem']} font-perFont`}><GiPayMoney/>پرداخت در محل</li>
          </ul>
        </motion.footer>
      </motion.div>}
    </AnimatePresence>
  );
});

// solve the displayName issue: https://bobbyhadz.com/blog/react-component-is-missing-display-name
ClothesContent.displayName = "ClothesContent";
export default ClothesContent;