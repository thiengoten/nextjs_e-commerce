"use client"
import Link from "next/link"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useFormState } from "react-dom"
import { formSchema } from "@/utils/formSchema"
import { z } from "zod"
import { useRef } from "react"
import { signupAction } from "@/app/(auth)/register/actions"

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(signupAction, {
    message: "",
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-xl'>Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className='grid gap-4'
            action={formAction}
            ref={formRef}
            onSubmit={form.handleSubmit((data, event) => {
              event?.preventDefault()
              const formData = new FormData()
              formData.append("email", data.email)
              formData.append("password", data.password)
              signupAction(state, formData)
            })}
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='m@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='w-full'
              disabled={form.formState.isSubmitSuccessful}
            >
              {form.formState.isSubmitSuccessful && (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              )}
              Create an account
            </Button>
          </form>
        </Form>
        <div className='mt-4 text-center text-sm'>
          Already have an account?{" "}
          <Link href='/login' className='underline'>
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
