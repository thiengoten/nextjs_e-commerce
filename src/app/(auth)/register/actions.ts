"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "@/utils/formSchema"

export type FormState = {
    message: string
}
export async function signupAction(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    const supabase = createClient()
    const convertedFormData = Object.fromEntries(formData)
    const parsed = formSchema.safeParse(convertedFormData)
    const data = {
        email: parsed.data?.email ?? "",
        password: parsed.data?.password ?? "",
    }
    console.log("🚀 ~ data:", data)

    const { error } = await supabase.auth.signUp(data)
    if (error) {
        console.log("🚀 ~ error:", error)
        redirect("/error")
    }
    revalidatePath("/")
    redirect("/")
}
