'use client';

import React, { forwardRef } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Award, CarFront, Cherry, Drama, Github, MapPin } from 'lucide-react';
import { GiPayMoney, GiReturnArrow } from 'react-icons/gi';
import { TbTruckDelivery } from 'react-icons/tb';
import { TiTickOutline } from 'react-icons/ti';

import { children } from '@/components/Animations/DropDown Menu/clothes-content';
import classes from '@/components/Animations/DropDown Menu/modern-menu.module.css';





type Ref = HTMLDivElement;
const ProductContent = forwardRef<Ref, {productName: string}>(({...props }, ref) => {
  return (
    <AnimatePresence>
      {props.productName === "menuOne" && <motion.div className={`w-[645px] min-h-[330px] flex flex-col px-2 overflow-clip ${classes.wrapper}`} ref={ref}>
        <motion.div className={"w-full h-fit max-h-full grid grid-cols-2 grid-rows-3 space-y-4"}>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={1}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Award size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>یخچال</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={3}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Cherry size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>چرخ گوشت</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={5}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><CarFront size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>گوشت</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={7}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Drama size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>وسائل دیگر</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={9}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><MapPin size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>مثالی دیگر</span>
          </motion.p>
          <motion.p whileHover={{
            paddingInlineStart: "10px",
          }} className={classes.products} variants={children} initial={"hide"} animate={"show"} custom={11}
                    exit={"hide"}>
            <span className={"p-2 iconContainer"}><Github size={24} /></span>
            <span className={"font-semibold text-lg font-vazirFont"}>اجزای یخچال</span>
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
ProductContent.displayName = "ProductContent";
export default ProductContent;