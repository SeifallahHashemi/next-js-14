'use client'
import React, { useRef } from "react";
import AddButton from "@/components/server-actions/add-button";
import { formAction } from "@/utils/actions/action";

const ServerActionForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const formActionHandler = async (formData: FormData) => {
    await formAction(formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form className={"space-y-3"} ref={formRef} action={formActionHandler}>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
      >
        Your Text
      </label>
      <input
        name={"todo"}
        type="text"
        id="email"
        aria-describedby="helper-text-explanation"
        className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="add todo"
      />
      <AddButton />
    </form>
  );
};

export default ServerActionForm;