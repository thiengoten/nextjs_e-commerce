"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { createClient } from "@/utils/supabase/server"
import { formSchema } from "@/utils/formSchema"

export type FormState = {
    message: string
}
export async function signup(
    prevState: FormState,
    formData: FormData,
): Promise<FormState> {
    return new Promise((resolve, reject) => {
        // Simulate a delay with setTimeout
        setTimeout(() => {
            const convertedFormData = Object.fromEntries(formData)
            const parsed = formSchema.safeParse(convertedFormData)
            console.log("🚀 ~ signup ~ parsed:", parsed)

            // Add your signup logic here...

            // If signup is successful, resolve the promise
            resolve({
                message: "done",
            })

            // If there's an error during signup, reject the promise
            // reject(new Error('Signup failed'));
        }, 2000) // 2 seconds delay
    })
}
