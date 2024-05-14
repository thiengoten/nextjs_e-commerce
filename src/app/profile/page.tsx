import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import React from "react"

export default async function ProfilePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect("/login")
  }

  return <p>Hello {data.user.email}</p>
}
