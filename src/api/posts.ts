import { db } from "@/db/db"
import { postsTable } from "@/db/schema"
import { PostsDTO } from "@/lib/definitions"

export async function getPosts(): Promise<PostsDTO[]> {
    const results = await db.select().from(postsTable)
    return results
}
