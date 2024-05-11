import { getPosts } from "@/api/posts"
import React from "react"

export default async function Page() {
  const posts = await getPosts()
  console.log("🚀 ~ Page ~ Hekki:", posts)
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
