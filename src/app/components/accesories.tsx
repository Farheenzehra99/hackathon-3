import React from 'react'

const Accesories = () => {
  return (
    <div><div
    className="flex flex-wrap gap-10"
    role="region"
    aria-label="Product filtering and sorting options"
  >
    <div className="flex flex-col">
      <h2 className="text-2xl font-bold text-violet-950">
        Ecommerce Accessories &amp; Fashion item
      </h2>
      <div className="self-start mt-2 text-xs text-slate-400" aria-live="polite">
        About 9,620 results (0.62 seconds)
      </div>
    </div>
    <div className="flex flex-wrap gap-7 items-start my-auto max-md:max-w-full">
      <div className="flex gap-2 text-base text-indigo-800">
        <label htmlFor="perPage" className="grow my-auto">
          Per Page:
        </label>
        <select
          id="perPage"
          className="flex shrink-0 border border-gray-200 border-solid h-[25px] w-[55px]"
          aria-label="Select number of items per page"
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="flex gap-2">
        <label htmlFor="sortBy" className="grow text-base text-indigo-800">
          Sort By:
        </label>
        <select
          id="sortBy"
          className="flex gap-0.5 px-3 py-1.5 text-xs border border-gray-200 border-solid text-slate-400"
          aria-label="Sort products by"
        >
          <option value="bestMatch">Best Match</option>
          <option value="price">Price</option>
          <option value="newest">Newest</option>
        </select>
      </div>
      <div className="flex gap-1 items-start text-base text-indigo-800 whitespace-nowrap">
        <span className="grow self-stretch">View:</span>
        <button
          className="focus:outline-none focus:ring-2 focus:ring-indigo-800"
          aria-label="Grid view"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73c7a350b33c2adf0c2841acb598ef2f9ef3bcc7f73dce99cb4f09c85549fbca?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt=""
            className="object-contain shrink-0 mt-1.5 w-3 aspect-square"
          />
        </button>
        <button
          className="focus:outline-none focus:ring-2 focus:ring-indigo-800"
          aria-label="List view"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/536fc796b4197239583ae707cc837b335b2143b8e03db62bc8e946f89e0f26d0?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
            alt=""
            className="object-contain shrink-0 mt-1.5 w-3 aspect-square"
          />
        </button>
      </div>
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search products
        </label>
        <input
          type="search"
          id="search"
          className="flex shrink-0 self-stretch border border-gray-200 border-solid h-[30px] w-[162px] px-2"
          placeholder="Search products"
          aria-label="Search products"
        />
      </div>
    </div>
  </div>
  </div>
  )
}

export default Accesories;