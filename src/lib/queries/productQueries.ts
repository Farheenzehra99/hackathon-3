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

  return client.fetch(query);
};
