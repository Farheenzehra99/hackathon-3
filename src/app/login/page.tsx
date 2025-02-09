import React from 'react'

const page = () => {
  return (
    <div className=''>
         <div
    className="flex flex-col justify-center items-start px-20 py-28 mt-6 w-full text-center bg-violet-50 max-md:px-5 max-md:pb-24 max-md:max-w-full"
    role="region"
    aria-label="Shop Navigation"
  >
    <div className="flex flex-col mb-0 max-w-full w-[315px] max-md:mb-2.5">
      <h1 className="text-4xl font-bold text-indigo-950">My Account</h1>
      <nav aria-label="Breadcrumb">
        <ol className="flex gap-1.5 self-start mt-2.5 text-base font-medium">
          <li className="flex gap-1 text-black">
            <a
              href="/"
              className="grow hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 ml-16"
            >
              Home
            </a>
            <span aria-hidden="true">.</span>
          </li>
          <li className="flex gap-1 text-black">
            <a
              href="/pages"
              className="hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Pages
            </a>
            <span className="text-pink-500" aria-hidden="true">
              .
            </span>
          </li>
          <li className="text-pink-500" aria-current="page">
            My Account
          </li>
        </ol>
      </nav>
    </div>
  </div>

      <form className="flex flex-col text-lg rounded-none max-w-[544px] mx-auto sm:ml-[500px]">
        <div className="flex flex-col px-14 py-12 w-full bg-white shadow-sm sm:px-5">
          <h1 className="self-center text-3xl font-bold text-black">Login</h1>
          <p className="self-center mt-2">Please login using account detail below.</p>

          <div className="mt-9">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3.5 py-4 text-base bg-white rounded-sm border border-solid border-slate-300 focus:ring-2 focus:ring-pink-500"
              placeholder="Email Address"
              aria-required="true"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-4 text-base bg-white rounded-sm border border-solid border-slate-300 focus:ring-2 focus:ring-pink-500"
              placeholder="Password"
              aria-required="true"
            />
          </div>

          <a
            href="#"
            className="self-start mt-3.5 hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            tabIndex={0}
          >
            Forgot your password?
          </a>

          <button
            type="submit"
            className="px-16 py-3.5 mt-6 font-bold text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:px-5 sm:w-full"
          >
            Sign In
          </button>

          <p className="self-center mt-7">
            Don't have an Account?
            <a
              href="#"
              className="text-pink-500 hover:text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              tabIndex={0}
            >
              Create account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default page;
