"use client";

import React, { useState } from "react";

// Mock data for products including new images
const productsData = [
  {
    id: 1,
    name: "White watches",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/2435faecdbd3ac27749309b58da16237dec7fa3b036002fcd0bd985db7f28cfb?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "White",
    size: "Medium",
    price: 150,
    dateAdded: new Date("2025-01-20"),
  },
  {
    id: 2,
    name: "Perfume",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/bbed3f9395c15398eea0222c44e0ffc15c55190269ac7bacbcba23a666b85ba1?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "Gray",
    size: "Large",
    price: 300,
    dateAdded: new Date("2025-01-21"),
  },
  {
    id: 3,
    name: "Mens Accessories",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d1504115cd90a32eb7347d0b12c289fb7d88644d8a07b73117370c41eaad79e7?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "Black",
    size: "Small",
    price: 100,
    dateAdded: new Date("2025-01-19"),
  },
  {
    id: 4,
    name: "Classic Game",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1346f669e190c14de99c8d154066a71ad6619b4cca1c8cff8d3e79277fc4e739?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "White",
    size: "Medium",
    price: 75,
    dateAdded: new Date("2025-01-18"),
  },
  {
    id: 5,
    name: "Vintage Bookshelf",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e6defc00cb1aa43ef61772cd5867da51b1933dd3707f5b517f09df843af4b717?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "Brown",
    size: "Large",
    price: 250,
    dateAdded: new Date("2025-01-17"),
  },
  {
    id: 6,
    name: "Chic Desk",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/dec268f08559d0a2c06fc3d3d79a40ddec7eff478f97d0c08069374235abffb2?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "Yellow",
    size: "Medium",
    price: 200,
    dateAdded: new Date("2025-01-22"),
  },
  {
    id: 7,
    name: "Elegant Shoe",
    image: "https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/4caea7fb091afa7f4078f0100c37bd7c9e1cbfbbb5be4a1f3bbc4728e5cab3c4?apiKey=48515e2413874846bf60cd2409ef14d1&",
    color: "Green",
    size: "Large",
    price: 180,
    dateAdded: new Date("2025-01-21"),
  },
];

const Page = () => {
  const [colorFilter, setColorFilter] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [sortBy, setSortBy] = useState("bestMatch");

  const filteredProducts = productsData.filter((product) => {
    return (
      (colorFilter
        ? product.color.toLowerCase() === colorFilter.toLowerCase()
        : true) &&
      (sizeFilter
        ? product.size.toLowerCase() === sizeFilter.toLowerCase()
        : true) &&
      (priceFilter ? product.price <= parseInt(priceFilter) : true)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.dateAdded.getTime() - a.dateAdded.getTime();
      case "price":
        return a.price - b.price;
      case "bestMatch":
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl font-bold text-center text-violet-950 mb-6">
        Ecommerce Accessories & Fashion Items
      </h2>
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Filter by Color"
            value={colorFilter}
            onChange={(e) => setColorFilter(e.target.value)}
            className="p-2 border rounded w-40"
          />
          <input
            type="text"
            placeholder="Filter by Size"
            value={sizeFilter}
            onChange={(e) => setSizeFilter(e.target.value)}
            className="p-2 border rounded w-40"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="p-2 border rounded w-40"
          />
        </div>
        <div>
          <label htmlFor="sortBy" className="mr-2 font-medium">
            Sort By:
          </label>
          <select
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="bestMatch">Best Match</option>
            <option value="price">Price</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">Color: {product.color}</p>
              <p className="text-gray-600">Size: {product.size}</p>
              <p className="text-lg font-semibold text-violet-900">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
