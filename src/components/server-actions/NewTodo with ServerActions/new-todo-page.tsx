import React from 'react';
import { getTodo } from '@/libs/new-todo';
import NewTodoList from '@/components/server-actions/NewTodo with ServerActions/NewTodoList';
import { notFound } from 'next/navigation';
import AddNewTodoForm from "@/components/server-actions/NewTodo with ServerActions/AddNewTodoForm";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

const NewTodoPage = async () => {
  const { todos } = await getTodo();

  if (!todos) notFound();

  return (
    <section className={"container mx-auto max-w-3xl space-y-6 pt-4"}>
      <AddNewTodoForm />
      <NewTodoList todos={todos} />
    </section>
  );
};

export default NewTodoPage;