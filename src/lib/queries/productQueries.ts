import { client } from "@/sanity/lib/client";

export const fetchProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    discountPercentage,
    isFeaturedProduct,
    stockLevel,
    "imageUrl": image.asset->url,
    "additionalImages": additionalImages[].asset->url,
    description,
    additionalDescription,
    additionalInfo,
    tags,
    sizes,
    colors,
    category
  }`;

  try {
    const products = await client.fetch(query);
    if (!products.length) {
      console.warn("No products found.");
    }
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
