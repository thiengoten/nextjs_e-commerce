"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

export default function SubmitButton() {
  const { pending } = useFormStatus()
  console.log("🚀 ~ SubmitButton ~ pending:", pending)

  return (
    <Button type='submit' className='w-full' disabled={pending}>
      Login
    </Button>
  )
}
