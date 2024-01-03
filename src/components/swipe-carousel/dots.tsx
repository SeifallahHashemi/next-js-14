import React, { Dispatch, SetStateAction } from "react";
import { ImagesSrc } from "@/components/swipe-carousel/Images";

const Dots = ({imgIndex, setImgIndex}: {imgIndex: number, setImgIndex: Dispatch<SetStateAction<number>>}) => {
  return (
    <div className={"flex justify-center w-full mt-4 gap-2"}>
      {ImagesSrc.map((src, indx) => {
        return ( <button
          key={indx}
          className={
            `w-4 h-4 rounded-full flex justify-center items-center
              bg-neutral-950 text-neutral-100
              ${imgIndex === indx ? "bg-neutral-100 text-neutral-950" : ""}`
          }
          onClick={() => setImgIndex(indx)}
        >
          &bull;
        </button>
      )
        ;
      })}
    </div>
  );
};

export default Dots;