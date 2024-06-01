import { db } from "@/db/db"
import { ProductsTable } from "@/db/schema"
import { Product } from "@/lib/definitions"

export async function getProducts(): Promise<Product[] | undefined> {
    try {
        const products = await db.select().from(ProductsTable)
        return products
    } catch (error) {
        console.log(error)
    }
}
