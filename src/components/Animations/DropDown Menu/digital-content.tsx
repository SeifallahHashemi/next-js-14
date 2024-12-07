'use client';
import React, { forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { children, variants } from "@/components/Animations/DropDown Menu/clothes-content";
import classes from "@/components/Animations/DropDown Menu/modern-menu.module.css";
import { Mouse, Palette, Power, Quote, Ribbon, Send, Shirt } from "lucide-react";
import { TbTruckDelivery } from "react-icons/tb";
import { TiTickOutline } from "react-icons/ti";
import { GiPayMoney, GiReturnArrow } from "react-icons/gi";

type Ref = HTMLDivElement;
const DigitalContent = forwardRef<Ref, {productName: string}>(({...props }, ref) => {
  return (
    <AnimatePresence>
      {props.productName === "menuThree" && <motion.div className={`min-w-[720px] min-h-[380px] flex flex-col px-2 overflow-clip ${classes.wrapper}`} ref={ref}>
        <motion.div className={"w-full h-fit max-h-full grid grid-cols-2 grid-rows-3 space-y-4"}>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={1}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Mouse size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>موبایل</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={3}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Palette size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>لپ تاپ</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={5}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Power size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>ماوس</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={7}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Quote size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>کیبورد</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={9}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Shirt size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>کامپوتر</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={11}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Send size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>هدفون</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={13}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Send size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>هدفون</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px"
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={15}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Send size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>هدفون</span>
          </motion.p>
        </motion.div>
        <motion.footer className={"absolute bottom-0 left-0 w-full h-32 p-2 border-t-1 border-slate-50/10"}
                       variants={children}
                       initial={"hide"} animate={"show"} custom={16} exit={"hide"}>
          <ul className={"w-full h-full grid grid-cols-2 grid-rows-2"}>
            <li className={`${classes["products__listItem"]} font-perFont`}><TbTruckDelivery/>ارسال فوری</li>
            <li className={`${classes['products__listItem']} font-perFont`}><TiTickOutline/>ضمانت اصالت کالا</li>
            <li className={`${classes['products__listItem']} font-perFont`}><GiReturnArrow/>بازگشت کالا</li>
            <li className={`${classes['products__listItem']} font-perFont`}><GiPayMoney/>پرداخت در محل</li>
          </ul>
        </motion.footer>
      </motion.div>}
    </AnimatePresence>
  );
});

DigitalContent.displayName = "DigitalContent";
export default DigitalContent;