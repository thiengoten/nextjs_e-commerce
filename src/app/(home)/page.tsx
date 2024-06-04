import { ProductCard } from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { getProducts } from "@/utils/drizzle/products"

import Image from "next/image"
import Link from "next/link"

export default async function Home() {
  // const products = await getProducts()

  return (
    <main className='container mt-7 min-h-screen'>
      <div className='grid gap-5  md:grid-cols-3 md:grid-rows-2'>
        <ProductCard className='md:col-span-2 md:row-span-2' />
        <ProductCard />
        <ProductCard />
      </div>
      {/*TODO: Carousel */}
      <div>Carousel</div>
    </main>
  )
}
