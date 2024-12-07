'use client';
import React, { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?: number) {
  const [debounce, setDebounce] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounce(value),delay || 500);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounce;
}