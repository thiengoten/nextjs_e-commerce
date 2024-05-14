import { getPosts } from "@/api/posts"
import React from "react"

export default async function Page() {
  const posts = await getPosts()
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
