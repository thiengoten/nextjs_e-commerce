import { db } from "@/db/db"
import { ProductsTable } from "@/db/schema"

export type ProductCardT = {
    id: string
    name: string
    price: number
    image: string
}
export async function getProducts(): Promise<ProductCardT[]> {
    const products: ProductCardT[] = await db
        .select({
            id: ProductsTable.id,
            name: ProductsTable.name,
            price: ProductsTable.price,
            image: ProductsTable.imageURL,
        })
        .from(ProductsTable)
    return products
}
