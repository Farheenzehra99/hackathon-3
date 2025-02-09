import Link from 'next/link'
import React from 'react'

const Twentyprcnt = () => {
  return (
    <div className='ml-11 hidden lg:block sm:block'><div>
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
        <div className="flex z-10 flex-col self-stretch my-auto w-full max-md:mt-10 max-md:mr-0 max-md:max-w-full">
          <h2 className="mr-6 text-4xl font-bold tracking-wide leading-none text-violet-950 max-md:mr-2.5 max-md:max-w-full">
            20% Discount Of All Products
          </h2>
          <div
            className="self-start mt-4 text-xl tracking-wide leading-none text-pink-500"
            role="text"
            aria-label="Product name"
          >
            Eams Sofa Compact
          </div>
          <p className="mt-5 mr-11 text-lg tracking-wide leading-8 text-neutral-300 max-md:mr-2.5 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full text-base tracking-wide text-slate-300 max-md:mt-10">
                  <div className="flex gap-1.5 self-stretch leading-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef2e576092e782bf0888cc6627a01008a0a03e6021852f2613c5966fc0fbd70f?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      alt="Metal material icon"
                      className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
                    />
                    <div className="grow shrink w-[195px]">
                      Material expose like metals
                    </div>
                  </div>
                  <div className="flex gap-1.5 mt-2.5 leading-8">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef2e576092e782bf0888cc6627a01008a0a03e6021852f2613c5966fc0fbd70f?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      alt="Color palette icon"
                      className="object-contain shrink-0 my-auto aspect-[1.39] w-[18px]"
                    />
                    <div className="basis-auto">Simple neutral colours.</div>
                  </div>
                  <Link href="/shoppingcart"> <button
                className=" w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition sm:w-auto"
               
              >
                View more
              </button></Link>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col w-full text-base tracking-wide leading-8 text-slate-300 max-md:mt-10">
                  <div className="flex gap-1.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9608262104ec40688408de5ce760622941e95fb1e8a17605393da9fd0ac927d7?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      alt="Geometric design icon"
                      className="object-contain shrink-0 self-start mt-1.5 w-6 aspect-square"
                    />
                    <div className="grow shrink w-[233px]">
                      Clear lines and geomatric figures
                    </div>
                  </div>
                  <div className="flex gap-1.5 self-start mt-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9608262104ec40688408de5ce760622941e95fb1e8a17605393da9fd0ac927d7?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                      alt="Metal material icon"
                      className="object-contain shrink-0 my-auto w-6 aspect-square"
                    />
                    <div className="basis-auto">Material expose like metals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a31c1943c6eb89e187a62682ba61cd1e34b7ed1c2a32b45c22555d405a8481a?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
          alt="Eams Sofa Compact product image"
          className="object-contain grow w-full aspect-[1.17] max-md:max-w-full"
        />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Twentyprcnt