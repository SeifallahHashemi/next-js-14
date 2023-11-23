import prisma from "@/libs/prismadb";

export async function getTodo() {
  try {
    const todos = await prisma.newTodo.findMany();
    return { todos };
  } catch (e) {
    return {e}
  }
}

export async function createTodo(title: string) {
  try {
    const todo = await prisma.newTodo.create({
      data: {
        title
      }
    });
    return todo
  } catch (e) {
    return {e}
  }
}

export async function updateTodo(id: string, isCompleted: boolean) {
  try {
    const todo = await prisma.newTodo.update({
      where: {
        id: id
      },
      data: {
        isCompleted
      }
    });
    return todo
  } catch (e) {
    return {e}
  }
}