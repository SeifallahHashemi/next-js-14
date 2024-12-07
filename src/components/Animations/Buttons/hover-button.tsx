import React from "react";
import { PencilLine } from "lucide-react";

const HoverButton = () => {
  return (
    <div className={"relative py-4 pl-4 bg-white overflow-hidden rounded flex flex-col gap-2 cursor-pointer w-64 group after:absolute after:bg-amber-700 after:inset-0 after:translate-y-full after:h-full after:w-full after:-z-10 isolate after:bg-gradient-to-r after:from-violet-600 after:to-indigo-600 hover:after:translate-y-0 after:transition-all after:duration-300"}>
      <PencilLine color={"#7330b5"} className={"group-hover:stroke-slate-50 transition-all duration-250"}/>
      <h2 className={"text-violet-900 group-hover:text-slate-100 transition-colors duration-250"}>Pencil line</h2>
      <PencilLine size={48} color="#f1f5f9" className={"absolute top-2 -right-2 transform -translate-y-1/2 scale-[3] stroke-slate-100 transition-all duration-300 group-hover:rotate-12 group-hover:stroke-violet-400"}/>
    </div>
  );
};

export default HoverButton;