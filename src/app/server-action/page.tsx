import React from "react";
import prisma from "@/libs/prismadb";
import DeleteButton from "@/components/server-actions/delete-button";
import { deleteAction } from "@/utils/actions/action";
import ServerActionForm from "@/components/server-actions/server-action-form";

const getData = async () => {
  const data = await prisma.todo.findMany({
    select: {
      input: true,
      id: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
};

const Page = async () => {
  const data = await getData();
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-[30vw] rounded-lg border p-10 shadow-xl">
        <ServerActionForm />
        <div className="mt-5 flex flex-col gap-y-2">
          {data.map((todo) => (
            <section key={todo.id} className="flex h-full w-full items-center">
              <form action={deleteAction} className={"flex flex-row justify-between w-full border-b border-b-slate-500 pb-2"}>
                <p className="mb-1 text-gray-500 dark:text-gray-400 md:text-lg">{todo.input}</p>
                <input type="hidden" name="id" value={todo.id} />
                <DeleteButton />
              </form>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
