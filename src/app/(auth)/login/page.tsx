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
import { Label } from "@/components/ui/label"
import { login } from "@/app/(auth)/login/actions"
import SubmitButton from "@/components/SummitButton"

export default function Page() {
  return (
    <Card className='mx-auto max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className='grid gap-4' action={login}>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='m@example.com'
              required
            />
          </div>
          <div className='grid gap-2'>
            <div className='flex items-center'>
              <Label htmlFor='password'>Password</Label>
              <Link href='#' className='ml-auto inline-block text-sm underline'>
                Forgot your password?
              </Link>
            </div>
            <Input id='password' type='password' required />
          </div>
          <SubmitButton />
          <Button variant='outline' className='w-full' formAction={login}>
            Login with Google
          </Button>
        </form>
        <div className='mt-4 text-center text-sm'>
          Don&apos;t have an account?{" "}
          <Link href='/register' className='underline'>
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
