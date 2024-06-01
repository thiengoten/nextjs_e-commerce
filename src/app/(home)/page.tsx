import { getAllProducts } from "@/api/products"
import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { getProducts } from "@/utils/drizzle/products"

import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className='container mt-7 min-h-screen'>
      <h1 className='mb-7 text-4xl font-semibold'>Products</h1>
      <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  )
}
