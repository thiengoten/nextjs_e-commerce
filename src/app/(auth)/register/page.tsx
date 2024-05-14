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
import { signup } from "@/app/(auth)/register/actions"
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
import { useFormState, useFormStatus } from "react-dom"
import { formSchema } from "@/utils/formSchema"
import { z } from "zod"
import { useRef } from "react"

export default function Page() {
  const formRef = useRef<HTMLFormElement>(null)
  const { pending } = useFormStatus()

  const [state, formAction] = useFormState(signup, {
    message: "",
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })
  //TODO: refactor submit button to a separate component
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
            onSubmit={form.handleSubmit(() => formRef.current?.submit())}
          >
            {/* <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                required
              />
            </div> */}
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
            <Button type='submit' className='w-full' disabled={pending}>
              {pending && <Loader2 />}
              Create an account
            </Button>
            {/* <Button variant='outline' className='w-full'>
              Sign up with Google
            </Button> */}
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
