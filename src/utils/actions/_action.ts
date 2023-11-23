'use server'

import { z } from 'zod'
import { ContactFormSchema, NewFormDataSchema } from "@/libs/schema";
import ContactFormEmail from "@/utils/emails/contact-form-email";
import { Resend } from "resend";
import { createTodo, updateTodo } from "@/libs/new-todo";
import { revalidatePath } from "next/cache";

type Inputs = z.infer<typeof NewFormDataSchema>

export async function addEntry(data: Inputs) {
  const result = NewFormDataSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.success) {
    const { name, email, message } = result.data
    try {
      const data = await resend.emails.send({
        from: 'YOUR_VERIFIED_EMAIL',
        to: ['TO_WHATEVER_EMAIL'],
        subject: 'Contact form submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        react: ContactFormEmail({ name, email, message })
      })
      return { success: true, data }
    } catch (error) {
      return { success: false, error }
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() }
  }
}

export const addTodoAction = async (title: string) => {
  await createTodo(title)
  revalidatePath("/")
}
export const updateTodoAction = async (id: string, isCompleted: boolean) => {
  await updateTodo(id, isCompleted)
  revalidatePath("/")
}