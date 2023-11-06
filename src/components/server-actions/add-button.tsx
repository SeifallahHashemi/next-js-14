"use client";

import { useFormStatus } from "react-dom";
import React from "react";

export default function AddButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="mb-2 mr-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
    >
      {pending ? "Adding..." : "ADD"}
    </button>
  );
}
