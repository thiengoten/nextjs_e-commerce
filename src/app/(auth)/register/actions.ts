"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"

export async function signup(formData: FormData) {
    const supabase = createClient()

    // type-casting here for convenience
    // in practice, you should validate your inputs
    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }
    console.log("🚀 ~ signup ~ data:", data)

    const { error } = await supabase.auth.signUp(data)
    console.log("🚀 ~ signup ~ error:", error)

    if (error) {
        console.log(error)
        redirect("/error")
    }

    revalidatePath("/")
    redirect("/")
}
