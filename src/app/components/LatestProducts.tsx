"use client"

import * as React from "react"
import { ProductCard } from "../components/ui/product-card-home"
import { client } from '../../sanity/lib/client';

interface Product {
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



const categories = ["New Arrival", "Best Seller", "Featured", "Special Offer"]



async function getProducts() {
  try {
    const products = await client.fetch(`*[_type == "product" && "latest" in tags] {
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


export default function LatestProducts() {
  const [activeCategory, setActiveCategory] = React.useState("New Arrival")
  const [latestProducts, setLatestProducts] = React.useState<Product[]>([])

  React.useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await getProducts()
      setLatestProducts(fetchedProducts)
    }
    fetchData()
  }, [])


  return (
    <section className="py-16">
      <div className="  md:w-[1177px] mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-[#1A0B5B]">
          Latest Products
        </h2>
        <div className="mb-8 flex justify-center gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base ${
                activeCategory === category
                  ? "text-[#FB2E86]"
                  : "text-[#151875]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestProducts.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
};
