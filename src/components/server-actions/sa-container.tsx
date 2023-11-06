"use client";
import React, { useRef } from "react";
import prisma from "@/libs/prismadb";
import List from "@/components/flowbite/list";
import { formAction } from "@/utils/actions/action";
import TodoData from "@/components/server-actions/TodoData";

interface Todo {
  id: string;
  input: string;
}

const SaContainer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const formActionHandler = async (formData: FormData) => {
    await formAction(formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <section className={"container flex max-w-7xl flex-col space-y-3"}>
      <form className={"space-y-3"} action={formActionHandler} ref={formRef}>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          name={"todo"}
          type="text"
          id="email"
          aria-describedby="helper-text-explanation"
          className="block w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="add todo"
        />
        <button
          type="submit"
          className="mb-2 mr-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
        >
          ADD Todo
        </button>
      </form>
      <TodoData />
    </section>
  );
};

export default SaContainer;
