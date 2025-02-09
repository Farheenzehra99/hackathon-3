'use client';

import Image from 'next/image';

function TrendingProducts() {
  const products = [
    { id: 1, img: "/images/chair5.png" },
    { id: 2, img: "/images/chair6.png" },
    { id: 3, img: "/images/chair7.png" },
    { id: 4, img: "/images/product5.png" },
  ];

  const exclusiveProducts = [
    { id: 1, img: "/images/chair5.png" },
    { id: 2, img: "/images/chair9.png" },
    { id: 3, img: "/images/chair10.png" },
  ];

  return (
    <div className="w-full bg-white py-20">
      {/* Section Heading */}
      <h2 className="text-[#3F509E] text-3xl font-bold text-center mb-16">Trending Products</h2>

      {/* Product Grid */}
      <div className="w-[1000px] max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Image with Gray Background */}
            <div className="bg-gray-200 flex justify-center items-center p-6 h-[280px] relative">
              <Image
                src={product.img}
                alt="Trending Product"
                width={200}
                height={200}
                className="object-contain transition-all duration-300 group-hover:opacity-90"
              />
            </div>

            {/* Product Details */}
            <div className="mt-4 text-center">
              <h3 className="text-[#3F509E] font-semibold text-lg mb-2">Cantilever Chair</h3>
              <p className="text-[#3F509E] font-bold inline-block">$26.00</p>
              <span className="text-gray-500 line-through ml-2">$42.00</span>
            </div>
          </div>
        ))}
      </div>

      {/* chairs and Product List Section */}
      <div className="w-[1000px] max-w-screen-l mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* chair 1 */}
        <div className="bg-blue-50 p-8 flex flex-col justify-between relative h-[250px]">
          <h3 className="text-[#3F509E] text-2xl font-bold mb-4">23% Off in all products</h3>
          <button className="text-pink-600 underline text-left mb-28 font-normal">Shop Now</button>
          <Image
            src="/images/chair5.png"
            alt="chair Image"
            width={200}
            height={200}
            className="absolute bottom-2 ml-32  object-contain"
          />
        </div>

        {/* chairs 2 */}
        <div className="bg-blue-50 p-8 flex flex-col justify-between relative h-[250px]">
          <h3 className="text-[#3F509E] text-2xl font-bold mb-4">23% Off in all products</h3>
   {/* Button */}
   <button className="text-pink-600 underline font-normal mb-28 text-left">
    View Collection
  </button>
          <Image
            src="/images/chair6.png"
            alt="chair Image"
            width={200}
            height={200}
             className="absolute pt-32 ml-20  object-contain"
          />
        </div>

        {/* Exclusive Product List */}
        <div className="flex flex-col space-y-4">
          {exclusiveProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-200 flex items-center p-2 h-[70px] rounded shadow"
            >
              <Image
                src={product.img}
                alt="Exclusive Product"
                width={80}
                height={80}
                className="object-contain mr-4"
              />
              <div>
                <h3 className="text-[#3F509E] font-semibold text-lg mb-1">Exclusive Seat Chair</h3>
                <p className="text-[#3F509E] font-bold inline-block">$32.00</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;