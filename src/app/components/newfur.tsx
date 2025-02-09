import Link from "next/link";
import React from "react";
import { client } from '../../sanity/lib/client';

const Newfur = async () => {
  // Fetch data directly in the component
  const query = `*[_type == "banner"][0]{
    imageUrl,
    altText,
    heading
  }`;
  const bannerData = await client.fetch(query);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex flex-col rounded-none" role="banner">
        <div className="px-20 pb-9 w-full bg-violet-50 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
                <div className="max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/46d589378cb4906e8820bbc7f3896c5edcec1733fd89ddd39c9a0e7de2f61b4a?placeholderIfAbsent=true&apiKey=63020574feac4f3895ec244f357db276"
                        alt={bannerData.altText}
                        className="object-contain w-full aspect-square"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col mt-52 font-bold max-md:mt-10 max-md:max-w-full">
                        <div className="self-start text-base leading-7 text-pink-500">
                          Best Furniture For Your Castle....
                        </div>
                        <h1 className="mt-3 text-5xl tracking-wider text-black leading-[82px] max-md:max-w-full max-md:text-4xl max-md:leading-[68px]">
                          {bannerData.heading}
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col self-center mt-2 ml-4 max-w-full w-[751px]">
                  <div className="self-end text-base font-bold leading-7 text-slate-400 max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing
                    <br />
                    in phasellus non in justo.
                  </div>
                  <div className="flex gap-5 justify-between mt-7 max-w-full text-lg font-semibold tracking-wide text-white w-[354px]">
                    <div
                      className="flex shrink-0 self-end mt-6 bg-pink-500 rounded-full fill-pink-500 h-[15px] w-[15px]"
                      role="presentation"
                      aria-hidden="true"
                    />
        <Link href="/shoppingcart"> <button
                className=" w-full px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition sm:w-auto"
               
              >
                View more
              </button></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={bannerData.imageUrl}
                alt="Featured furniture collection display"
                className="object-contain grow mt-10 w-full aspect-[1.02] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newfur;
