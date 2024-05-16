"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { formSchema } from "@/utils/formSchema"
import { useRef } from "react"
import { loginAction } from "@/app/(auth)/login/actions"
import { useFormState } from "react-dom"

export default function LoginPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction] = useFormState(loginAction, {
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
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            action={formAction}
            className='grid gap-4'
            ref={formRef}
            onSubmit={form.handleSubmit((data, event) => {
              event?.preventDefault()
              const formData = new FormData()
              formData.append("email", data.email)
              formData.append("password", data.password)
              loginAction(state, formData)
            })}
          >
            <div className='grid gap-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='m@example.com' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid gap-2'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <div className='flex items-center'>
                      <FormLabel>Password</FormLabel>
                      <Link
                        href='#'
                        className='ml-auto inline-block text-sm underline'
                      >
                        Forgot your password?
                      </Link>
                    </div>

                    <FormControl>
                      <Input type='password' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type='submit'
              className='w-full'
              disabled={form.formState.isSubmitSuccessful}
            >
              {form.formState.isSubmitSuccessful && (
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              )}
              Login
            </Button>

            <Button variant='outline' className='w-full'>
              Login with Google
            </Button>
          </form>
          <div className='mt-4 text-center text-sm'>
            Don&apos;t have an account?{" "}
            <Link href='/register' className='underline'>
              Sign up
            </Link>
          </div>
        </Form>
      </CardContent>
    </Card>
  )
}
