"use client"
import Link from "next/link"

interface ProductCategoryCardProps {
 
    _id: string;
    name: string;
    price: number;
   
    imageUrl: string;
  
  
}

export function ProductCategoryCard({
 _id,
 name,
  price,
 
  imageUrl,

  
}: ProductCategoryCardProps) {
  return (
    <div className="group relative text-center">
      <div className="relative mx-auto aspect-square w-56 overflow-hidden hover:border-l-[6px] hover:border-b-[6px]  border-[#151875] rounded-full bg-[#F6F7FB] transition-all duration-300 ease-in-out group-hover:bg-white group-hover:shadow-lg">
        {/* {isNew && ( */}
          <span className="absolute left-4 -bottom-4 hover:bottom-6 flex justify-center mx-auto  rounded-sm bg-[#00FF66] px-2 py-0.5 text-xs font-medium text-white">
            View Details
          </span>
        {/* )} */}
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-contain p-8 transition-transform duration-300 group-hover:scale-110"
        />
        
      </div>
      <div className="mt-6">
        <Link href={_id} className="text-lg font-normal text-[#151875] hover:text-[#FB2E86] line-clamp-1">
          {name}
        </Link>
        <p className="mt-1 text-base font-normal text-[#151875]">${price}</p>
      </div>
    </div>
  )
}
