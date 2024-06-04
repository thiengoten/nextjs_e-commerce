import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
type CardProps = React.ComponentProps<typeof Card>
export function ProductCard({ className, ...props }: CardProps) {
  return (
    <Card className={cn("relative block aspect-square", className)} {...props}>
      <CardContent className='overflow-hidden rounded-sm p-0 '>
        <Image
          src='https://osume.com/cdn/shop/files/OK_Kanagawa_ProducShot_112623.jpg?v=1701051781&width=1024'
          alt='Product 1'
          width={1024}
          height={1024}
          className='h-full w-full object-cover transition-all hover:scale-105'
        />
      </CardContent>
      <div className='absolute bottom-0  flex flex-1 px-4 py-4'>
        <CardFooter className='rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white'>
          <h3 className='mr-2 line-clamp-2 flex-grow pl-2 leading-none'>
            Keycap
          </h3>
          <Button className='rounded-full' size='sm' asChild>
            <Link href='/product/1'>$150</Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}
