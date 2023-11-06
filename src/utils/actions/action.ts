'use server'
import prisma from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const formAction = async (input: FormData) => {
  "use server";
  const data = input.get("todo") as string;
  await prisma.todo.create({
    data: {
      input: data,
    },
  });
  revalidatePath("/");
  revalidatePath("/server-action");
};
export const deleteAction = async (form: FormData) => {
  'use server'
  const id = form.get('id') as string;
  await prisma.todo.delete({
    where: {
      id
    }
  });
  revalidatePath('/')
  revalidatePath('/server-action')
}