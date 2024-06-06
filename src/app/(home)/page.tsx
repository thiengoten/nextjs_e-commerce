import AutoCarosel from "@/components/AutoCarosel"
import { ProductCard } from "@/components/ProductCard"

import { ProductCardT, getProducts } from "@/utils/drizzle/products"

export default async function Home() {
  const products = await getProducts()

  return (
    <main className='mt-7 min-h-screen'>
      <div className='container grid gap-5  md:grid-cols-3 md:grid-rows-2'>
        <ProductCard className='md:col-span-2 md:row-span-2' />
        <ProductCard />
        <ProductCard />
      </div>
      <AutoCarosel products={products} className='pt-8' />
    </main>
  )
}
