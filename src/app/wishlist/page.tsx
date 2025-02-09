import React from 'react'

const page = () => {
  return (
    <div className=''><div
    className="py-3 pr-16 pl-3.5 mt-40 max-w-full bg-white rounded-sm shadow-sm w-[1170px] max-md:pr-5 max-md:mt-10 max-md:mr-2 ml-20"
    role="region"
    aria-label="Product Details"
  >
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="grow max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/b9a0a75ea6fc1c1fbbe29e230a8e79ca8715aa46b38b01d1f45ce4756991146d?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain rounded aspect-[0.97] w-[151px]"
                  alt="Playwood chair view 1"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/49f04799804753e0b049bcaa192cacc7f9463c93754b1d3fa65a1e42f0930844?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain mt-3 rounded aspect-[0.97] w-[151px]"
                  alt="Playwood chair view 2"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/dbfb3426775410f666b7c177628522594c83ca83c67822af9a5cef9da542a170?apiKey=48515e2413874846bf60cd2409ef14d1&"
                  className="object-contain mt-3 rounded aspect-[0.97] w-[151px]"
                  alt="Playwood chair view 3"
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[71%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/1f175ff73a77aa681c4298e69a69a28caf7855270a4a5c680e9dc2496f61de57?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain grow w-full rounded aspect-[0.77] max-md:mt-5"
                alt="Playwood chair main view"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col items-start self-stretch my-auto w-full text-base font-semibold max-md:mt-10 max-md:max-w-full">
          <h1 className="text-4xl text-center text-indigo-950">
            Playwood arm chair
          </h1>
          <div
            className="flex gap-1.5 mt-1.5 text-sm leading-7 capitalize whitespace-nowrap text-violet-950 max-md:ml-1"
            role="group"
            aria-label="Product rating"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d2a682e670c8d3a9dcead4fe47bb7fff1ddd233ece5a82a22015386202a2893a?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain shrink-0 my-auto aspect-[5.75] w-[69px]"
              alt="Product rating stars"
            />
            <span>(22)</span>
          </div>
          <div
            className="flex gap-5 mt-1.5 leading-7 capitalize whitespace-nowrap max-md:ml-1"
            role="group"
            aria-label="Product pricing"
          >
            <span className="text-violet-950">$32.00</span>
            <span className="text-pink-500">$32.00</span>
          </div>
          <div className="mt-3 text-center text-indigo-950 max-md:ml-1">
            Color
          </div>
          <p className="self-stretch mt-3 leading-7 text-slate-400 max-md:max-w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus
            porttitor purus, et volutpat sit.
          </p>
          <div className="flex gap-5 mt-8 ml-20 leading-7 capitalize max-md:ml-2.5">
            <button
              className="text-violet-950 hover:underline focus:ring-2 focus:ring-violet-950 focus:outline-none"
              aria-label="Add to cart"
            >
              Add To cart
            </button>
            <button
              className="focus:ring-2 focus:ring-violet-950 focus:outline-none"
              aria-label="Favorite"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/64175b1d0afa6863e9665acebb6840a5a03513e38a3542ca0d8372ef790e2ee5?apiKey=48515e2413874846bf60cd2409ef14d1&"
                className="object-contain shrink-0 aspect-square w-[31px]"
                alt=""
              />
            </button>
          </div>
          <div className="mt-4 leading-7 text-violet-950 max-md:ml-1">
            Categories:
          </div>
          <div className="mt-2.5 leading-7 text-violet-950 max-md:ml-1">Tags</div>
          <div
            className="flex gap-4 mt-2.5 leading-7 whitespace-nowrap text-violet-950"
            role="group"
            aria-label="Share options"
          >
            <span>Share</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/22d3c286531a4a084bcdf557fd8086b61ee19611dbd202063eaf56b7e17b882a?apiKey=48515e2413874846bf60cd2409ef14d1&"
              className="object-contain shrink-0 my-auto w-14 aspect-[4.67]"
              alt="Social media sharing options"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

<div className=' sm:mr-36'>
  <div
  className="  flex flex-col justify-center items-center px-20 py-28 mt-32 w-full text-base font-semibold leading-loose bg-slate-50 text-slate-400 max-md:px-5 max-md:py-24 max-md:mt-10 max-md:max-w-full sm:mr-36 "
  role="region"
  aria-label="Product Description Section"
>
  <div className="flex flex-col -mb-6 max-w-full w-[1171px] max-md:mb-2.5 mr-36 sm:mr-36 " >
    <nav
      className="flex gap-10 max-w-full text-2xl text-violet-950 w-[666px] sm:mr-36"
      role="tablist"
    >
      <button
        role="tab"
        aria-selected="true"
        className="grow underline decoration-auto decoration-solid underline-offset-auto focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Description
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="grow shrink my-auto w-[161px] focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Additional Info
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="my-auto focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Reviews
      </button>
      <button
        role="tab"
        aria-selected="false"
        className="focus:outline-none focus:ring-2 focus:ring-violet-950"
        tabIndex={0}
      >
        Video
      </button>
    </nav>
    <div
      role="tabpanel"
      aria-label="Description Content"
      className="mt-14 max-md:mt-10 sm:mr-36 hidden md:block lg:block"
    >
      <h2 className="text-2xl text-violet-950 sm:mr-36" >Varius tempor.</h2>
      <p className="mt-3.5 mr-5 leading-7 max-md:mr-2.5 max-md:max-w-full sm:mr-36">
        Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare
        faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac
        est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque,
        elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
        tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus.
        Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu
        in fringilla vulputate nunc nec. Dui, massa viverr.
      </p>
      <h3 className="mt-12 text-2xl text-violet-950 max-md:mt-10">
        More details
      </h3>
      <div className="flex flex-wrap gap-2 items-start mt-4">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/3ff14f11e78e7c1fc47791787fba1879acc2da4231461a91fc97e879f6a1f492?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product feature icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex-auto w-[1132px] max-md:max-w-full">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr.
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-start mt-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/b83fb79f0035bc36213c39dcd0836fca7e31a7cc6505178837c802751ab3251d?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product feature icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex-auto w-[1132px] max-md:max-w-full">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr.
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-start mt-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/3ff14f11e78e7c1fc47791787fba1879acc2da4231461a91fc97e879f6a1f492?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product feature icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex-auto w-[1132px] max-md:max-w-full">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr.
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-start mt-3">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/3ff14f11e78e7c1fc47791787fba1879acc2da4231461a91fc97e879f6a1f492?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Product feature icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
        <div className="flex-auto w-[1132px] max-md:max-w-full">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
          arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Dui, massa viverr.
        </div>
      </div>
    </div>
  </div>
</div></div>
<div
  className="flex flex-col self-center mt-32 max-w-full w-[1167px] max-md:mt-10 ml-12  "
  role="region"
  aria-label="Related Products Section"
>
  <h2 className="self-start text-4xl font-bold text-center text-indigo-950">
    Related Products
  </h2>
  <div className="mt-12 max-md:mt-10 max-md:max-w-full sm:">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/77238bec427b74a38585a57214d5ccb955b92f5daf96eed84b9edff2bd4a21bb?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Mens Fashion Wear Product"
          className="object-contain grow shrink-0 max-w-full rounded aspect-[0.79] w-[270px] max-md:mt-7"
        />
      </div>
      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/07bbf74a701521e2233b83a89cd4aadd53799937661fda515ad4e8e6472c25e1?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Women's Fashion Product"
          className="object-contain grow shrink-0 max-w-full rounded aspect-[0.79] w-[270px] max-md:mt-7"
        />
      </div>
      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/8927ff0227f1faeb843e655c7d0b9abd907e874dfa4c523f6b59b0a7cd282f54?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Wolx Dummy Fashion Product"
          className="object-contain grow shrink-0 max-w-full rounded aspect-[0.79] w-[270px] max-md:mt-7"
        />
      </div>
      <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/0469a803e6f696312e70e85a90caa0430643aca923d7b0f8550e4f1449f1e1b3?apiKey=48515e2413874846bf60cd2409ef14d1&"
          alt="Top Wall Digital Clock Product"
          className="object-contain grow shrink-0 max-w-full rounded aspect-[0.79] w-[270px] max-md:mt-7"
        />
      </div>
    </div>
  </div>
  <div className="flex flex-wrap gap-5 justify-between items-start mt-4 w-full max-md:max-w-full">
    <div className="flex flex-col text-violet-950">
      <h3 className="text-base font-semibold">Mens Fashion Wear</h3>
      <div className="self-start mt-4 text-sm" aria-label="Price: $43.00">
        $43.00
      </div>
    </div>
    <div className="flex gap-0.5" role="group" aria-label="Product Rating">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/92ef324bd2341ab24fb88dbe82e3085dbbd8862514aed51d9ea695eab6e893b3?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
    </div>
    <div className="flex gap-10 items-start self-stretch text-violet-950 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold">Women's Fashion</h3>
        <div className="self-start mt-4 text-sm" aria-label="Price: $67.00">
          $67.00
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/d2a682e670c8d3a9dcead4fe47bb7fff1ddd233ece5a82a22015386202a2893a?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 aspect-[5.75] w-[69px]"
      />
      <div className="flex flex-col">
        <h3 className="text-base font-semibold">Wolx Dummy Fashion</h3>
        <div className="self-start mt-4 text-sm" aria-label="Price: $67.00">
          $67.00
        </div>
      </div>
    </div>
    <div className="flex gap-0.5" role="group" aria-label="Product Rating">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/e30e9f4ab9f8af08f9f70751e7cd4b9b39cebf143c193c907de2a485b845fd92?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/92ef324bd2341ab24fb88dbe82e3085dbbd8862514aed51d9ea695eab6e893b3?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 w-3 aspect-square"
      />
    </div>
    <div className="flex gap-8 self-stretch my-auto text-violet-950">
      <div className="flex flex-col">
        <h3 className="text-base font-semibold">Top Wall Digital Clock</h3>
        <div className="self-start mt-4 text-sm" aria-label="Price: $51.00">
          $51.00
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/eff281ff7f1aee5cafa7ea52b85322bc15cf2dbfad697a431bb6416186a1a3d7?apiKey=48515e2413874846bf60cd2409ef14d1&"
        alt=""
        className="object-contain shrink-0 self-start aspect-[5.75] w-[69px]"
      />
    </div>
  </div>
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/48515e2413874846bf60cd2409ef14d1/18744ac06886635992ba658a0d50bd10e15e9987757085ea439c41294534f665?apiKey=48515e2413874846bf60cd2409ef14d1&"
    alt="Promotional Banner"
    className="object-contain self-center mt-32 max-w-full aspect-[9.71] w-[904px] max-md:mt-10"
  />
</div>

  </div>
  )
}

export default page