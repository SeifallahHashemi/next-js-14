import React from "react";
import prisma from "@/libs/prismadb";
import List from "@/components/flowbite/list";
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
const TodoData = async () => {
  const data = await getData()
  return (
    <>
      {data.map((item) => (
        <List key={item.id} input={item.input} id={item.id}/>
      ))}
    </>
  );
};

export default TodoData;