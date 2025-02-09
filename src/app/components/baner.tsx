import React from 'react'

const Baner = () => {
  return (
    <div><div className="flex flex-col rounded-none mt-11">
    <div className="flex relative flex-col items-center px-20 pt-44 pb-24 w-full min-h-[462px] max-md:px-5 max-md:py-24 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7927a4977977ff09955694c2ad51bca295fcc32890d14d2145437947366ecd?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col mb-0 max-w-full w-[574px] max-md:mb-2.5">
        <div className="text-4xl font-bold tracking-wide text-center leading-[54px] text-violet-950 max-md:max-w-full">
          Get Leatest Update By Subscribe
          <br />
          0ur Newslater
        </div>
        <div className="self-center px-12 py-4 mt-7 max-w-full text-lg tracking-wide text-white bg-pink-500 rounded-sm w-[173px] max-md:px-5">
          Subscribe Now
        </div>
      </div>
    </div>
  </div>
  <img
  loading="lazy"
  src="https://cdn.builder.io/api/v1/image/assets/TEMP/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
  className="object-contain w-full aspect-[9.71] max-w-[904px] ml-64"
/>

  </div>
  )
}

export default Baner;