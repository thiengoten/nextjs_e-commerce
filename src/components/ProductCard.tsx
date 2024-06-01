import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/lib/definitions"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card>
      <CardContent className='m-auto w-[250px] overflow-hidden'>
        <Image
          src={product.imageURL}
          alt='Product 1'
          width={250}
          height={330}
          className='aspect-[3/4] h-auto w-auto object-cover transition-all hover:scale-105'
        />
      </CardContent>
      <CardFooter className='flex-col items-start'>
        <p className='truncatetext-lg mb-1 w-full font-semibold'>
          {product.name}
        </p>
        <p className='mb-1 w-full truncate text-sm font-medium'>
          ${product.price}
        </p>
        <Button asChild className='w-full'>
          <Link href={`/products/${product.id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
