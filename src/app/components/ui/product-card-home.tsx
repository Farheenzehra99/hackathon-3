import Link from "next/link"
import { Heart, Search, ShoppingCart } from 'lucide-react'
import { Button } from "../../components/ui/Button"
import { Card } from "../../components/ui/card"

interface ProductCardProps {
  _id: string
  name: string
  price: number
  imageUrl: string
  discountPercentage?: number
 
}

export function ProductCard({
  _id ,
  name,
  price,
  imageUrl,
  
  
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden border-none">
      <div className="relative aspect-square overflow-hidden bg-[#F6F7FB]">
        <div className="flex gap-x-4 ">

        {/* {isNew && ( */}
          <span className="absolute left-3 top-3 z-10 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            New
          </span>
         {/* )} 
         {discountPercentage && (
          <span className="absolute left-3 top-3 z-10 rounded bg-[#FB2E86] px-2 py-1 text-xs text-white">
            {discountPercentage} %
          </span>
        )}  */}
        </div>
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute -right-12 top-3 flex flex-col gap-2 transition-all duration-300 group-hover:right-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
            asChild
          >
            <Link href={`/product/${_id}`}>
              <Search className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-4 flex justify-between gap-x-[100px] items-center text-center">
        <Link
          href={`/product/${_id}`}
          className="text-sm font-bold text-[#FB2E86]  hover:underline  line-clamp-1"
        >
          {name}
        </Link>
        <div className="">
          <span className="font-bold text-[#151875]">${price}</span>
        </div>
      </div>
    </Card>
  )
}
