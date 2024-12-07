'use client';
import React, { useState } from "react";

const useClipboard = ({ timeOut = 2000 }: { timeOut?: number }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const copyToClipboard = (massage: string) => {
    if (!massage) return;
    if (typeof window === 'undefined' || !navigator.clipboard?.writeText) return;
    navigator.clipboard.writeText(massage).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, timeOut);
    });
  }
  return {isCopied, copyToClipboard};
};

export default useClipboard;