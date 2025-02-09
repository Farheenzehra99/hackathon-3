"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

// Define the Product interface
interface Product {
  title: string;
  slug: string;
  description: string;
  imageUrl: string;
  alt: string;
  price: number;
}

const Chair = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "featuredProducts"]{
        title,
        slug,
        description,
        imageUrl,
        alt,
        price
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div
        className="flex gap-5 max-md:flex-col"
        role="region"
        aria-label="Featured Products"
      >
        {products.map((product: Product, index) => (
          <div
            key={index}
            className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col grow max-md:mt-7">
              <div
                className="flex flex-col items-center pb-4 bg-white shadow-[0px_0px_25px_rgba(0,0,0,0.1)]"
                tabIndex={0}
              >
                <div className="flex flex-col self-stretch px-10 pt-12 pb-3 bg-slate-50 max-md:px-5">
                  <img
                    loading="lazy"
                    src={product.imageUrl}
                    className="object-contain aspect-square w-[178px]"
                    alt={product.alt}
                  />
                </div>
                <div className="mt-4 text-lg font-bold text-pink-500">
                  {product.title}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9972448bb680b7bd7ab3b1b49a295afd27394b5a75d40f7299c1b003cec0aab?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                  className="object-contain mt-3 rounded-xl aspect-[12.99] w-[52px]"
                  alt=""
                />
                <div className="mt-3 text-sm text-violet-950">
                  {product.description}
                </div>
                <div className="mt-3 text-sm text-violet-950">
                  ${product.price.toFixed(2)}
                </div>
                <button className="bg-pink-400"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chair;
