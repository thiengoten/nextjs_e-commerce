"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "@/utils/formSchema"
type FormState = {
    message: string
}
export async function loginAction(
    prevState: any,
    formData: FormData,
): Promise<FormState> {
    const supabase = createClient()
    const convertedFormData = Object.fromEntries(formData)
    const parsed = formSchema.safeParse(convertedFormData)
    const data = {
        email: parsed.data?.email ?? "",
        password: parsed.data?.password ?? "",
    }
    const { error } = await supabase.auth.signInWithPassword(data)
    if (error) {
        console.log("🚀 ~ error:", error)
    }
    revalidatePath("/")
    redirect("/")
}
