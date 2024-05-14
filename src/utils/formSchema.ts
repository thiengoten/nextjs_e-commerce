import { z } from "zod"

export const formSchema = z.object({
    email: z.string().trim().email({
        message: "Invalid email address",
    }),
    // password must be at least 8 characters long and contain at least one number and one special character
    password: z
        .string()
        .trim()
        .regex(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            {
                message:
                    "Password must be at least 8 characters long and contain at least one number and one special character",
            },
        ),
})
