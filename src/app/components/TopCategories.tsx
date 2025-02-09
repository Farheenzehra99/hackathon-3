
"use client"
import { ProductCategoryCard } from "../components/ui/product-category-card"
import { client } from "../../sanity/lib/client";
import { useEffect, useState } from "react";



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
    const products = await client.fetch(`
      *[_type == "product"]{
        _id,
        name,
        description,
        price,
        discountPercentage,
        priceWithoutDiscount,
        rating,
        ratingCount,
        tags,
        sizes,
        "imageUrl": image.asset->url
      }[6...10]
    `);
    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
export function TopCategories() {
  const [products, setProducts] = useState<Product[]>([]);
  
    useEffect(() => {
      async function fetchData() {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      }
      fetchData();
    }, []);
  return (
    <section className="py-24">
      <div className="container md:w-[1177px] mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl  font-bold text-[#1A0B5B]">
          Top Categories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCategoryCard key={product._id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
