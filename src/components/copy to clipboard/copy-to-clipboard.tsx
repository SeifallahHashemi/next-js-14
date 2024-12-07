'use client';
import React from "react";
import { cn } from "@/utils/tailwind-merger";
import { Button } from "@nextui-org/react";
import useClipboard from "@/utils/Hooks/useClipboard";
import { LuClipboard, LuClipboardCheck, LuCopy } from "react-icons/lu";

interface CopyToClipboardProps extends React.ComponentProps<'div'> {
  massage: string;
}
const CopyToClipboard = ({ massage, className,...props }: CopyToClipboardProps) => {
  const { isCopied, copyToClipboard } = useClipboard({ timeOut: 2000 });
  const copyToClipboardHandler = () => {
    if (isCopied) return
    copyToClipboard(massage);
  }
  console.log(isCopied);
  return (
    <div className={cn('', className)} {...props}>
      <Button variant={"ghost"} size={"md"} className={"h-8 w-8"} onClick={copyToClipboardHandler}>
        {isCopied ? (<LuClipboardCheck className='h-4 w-4 text-emerald-500'/>) : (<LuCopy className='h-4 w-4 text-zinc-500'/>)}
        <span className={"sr-only"}>CopyClipboard</span>
      </Button>
    </div>
  );
};

export default CopyToClipboard;