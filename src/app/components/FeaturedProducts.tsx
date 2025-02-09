"use client"
import { Heart, Search, ShoppingCart } from 'lucide-react';
import { Button } from "./ui/Button";
import { Card } from "./ui/card";
import Link from "next/link";
import { client } from '../../sanity/lib/client';
import { useEffect , useState } from 'react';



interface Product{
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  priceWithoutDiscount: number;
  rating: number;
  ratingCount: number;
  tags: string[];
  sizes: string[];
  imageUrl: string;
}




async function getProducts() {
  try {
    const products = await client.fetch(`*[_type == "product" && isFeaturedProduct == true] {
  _id, 
  name, 
  description, 
  price, 
  discountPercentage, 
  "priceWithoutDiscount": price * (1 - discountPercentage / 100),
  stockLevel, 
  "imageUrl": image.asset->url, 
  tags, 
  sizes, 
  colors, 
  category, 
  isFeaturedProduct
}
`);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}



export function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const fetchedProducts = await getProducts();
        setFeaturedProducts(fetchedProducts);
      }
      fetchData();
    }, []);

  return (
    <section className="py-16">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Featured Products
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 justify-center lg:grid-cols-4">
            {featuredProducts.map((product: Product) => (
            <Card
              key={product._id}
              className="group relative w-[270px] shadow-md overflow-hidden rounded-none border-none"
            >
              <div className="relative h-[280px] w-[270px] flex justify-center items-center overflow-hidden hover:bg-[#EBF4F3] bg-[#F6F7FB]">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-[200px] w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -left-36 top-3 flex  gap-2 transition-all duration-300 group-hover:left-3">
                <Button
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                >
                <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                >
                <Heart className="h-4 w-4" />
                </Button>
                <Button
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-[#FB2E86] hover:text-white"
                asChild
                >
                <Link href={`/product/${product._id}`}>
                  <Search className="h-4 w-4" />
                </Link>
                </Button>
              </div>
              </div>
              <div className="py-4 group-hover:bg-[#151875]  text-center">
              <Link
                href={`/product/${product._id}`}
                className=" line-clamp-1 p-4 "
              >
                <h3 className="font-heading font-bold group-hover:text-white text-pink-500 hover:underline line-clamp-1">
                {product.name}
                </h3>
              </Link>
              <h3 className="font-heading font-bold group-hover:text-white text-[#151875] ">CODE : Y34579</h3>
              <div className="flex items-center justify-center my-4 gap-1">
                <span className="bg-[#DE9034] h-[5px] w-[20px] rounded-full"></span>
                <span className="bg-[#EC42A2] h-[5px] w-[20px] rounded-full"></span>
                <span className="bg-[#8568FF] h-[5px] w-[20px] rounded-full"></span>
              </div>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="font-bold text-[14px] font-heading group-hover:text-white text-[#151875]">
                ${product.price}
                </span>
              </div>
              </div>
            </Card>
            ))}
        </div>
      </div>
    </section>
  );
};