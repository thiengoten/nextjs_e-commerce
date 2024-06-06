"use client"

import { ProductCard } from "@/components/ProductCard"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { ProductCardT } from "@/utils/drizzle/products"
import AutoScroll from "embla-carousel-auto-scroll"

type AutoCaroselProps = React.ComponentProps<typeof Carousel> & {
  products: ProductCardT[]
}
function AutoCarosel({ products, className, ...props }: AutoCaroselProps) {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        AutoScroll({
          direction: "forward",
          stopOnFocusIn: false,
          stopOnInteraction: false,
          startDelay: 2000,
          speed: 0.7,
        }),
      ]}
      className={cn("w-full", className)}
      {...props}
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className='md:basis-1/3 lg:basis-1/5 '>
            <ProductCard product={product} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

export default AutoCarosel
