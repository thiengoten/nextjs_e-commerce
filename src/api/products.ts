import { db } from "@/db/db"
import { ProductsTable } from "@/db/schema"
type Product = {
    id: string
    name: string
    price: number
    quantity: number
    imageURL: string
    createdAt: Date
    updatedAt: Date
}
export async function getAllProducts(): Promise<Product[]> {
    const products = await db.select().from(ProductsTable)
    return products
}
